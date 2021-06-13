import React, { Component } from 'react'
import Items from '../data'

const RoomContext = React.createContext()
class RoomProvider extends Component {
  state = {
    rooms: [],
    featuredRooms: [],
    sortedRooms: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  }

  //get Data cau hinh lai du lieu
  componentDidMount() {
    let rooms = this.formatData(Items) //khi goi function trong function prototype thi phai xai this

    let featuredRooms = rooms.filter((room) => room.featured === true)
    let maxPrice = Math.max(...rooms.map((item) => item.price))
    let maxSize = Math.max(...rooms.map((item) => item.size))
    console.log(featuredRooms)
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxSize,
      maxPrice,
    })
    // console.log({ ...this.state })
  }

  //hàm này sẽ format lại Object làm phẳng Object và chỉ lấy các Object cần
  formatData(Items) {
    let tempItems = Items.map((item) => {
      let id = item.sys.id
      let images = item.fields.images.map((image) => image.fields.file.url) //phải đặt cùng dòng ko sẽ lỗi vi no sẽ hiểu là trả về undefined ko thi phai ghi image => { return image.fields.file.url}
      //images là array cua tat ca cac hình
      let room = { ...item.fields, id, images } //gộp tat cac cac array nhỏ và array lon thanh 1 array
      return room
    })
    return tempItems
  }
  //lấy phòng mà có slug trùng với slug truyền vào
  //đưa vào component SingleRoom
  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms]
    const room = tempRooms.find((room) => room.slug === slug)
    return room
  }

  handleChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    console.log(name, value)

    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    )
  }
  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state

    let tempRooms = [...rooms]

    capacity = parseInt(capacity) //chuyển capacity từ chuỗi sang số

    if (type !== 'all') {
      tempRooms = tempRooms.filter((room) => room.type === type)
    }
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity)
    }
    // price
    tempRooms = tempRooms.filter((room) => room.price <= price)
    // size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    )
    //beakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true)
    }
    //pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true)
    }

    this.setState({
      sortedRooms: tempRooms,
    })
  }

  render() {
    return (
      //phải truyền value bằng {{...this.state}}
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
        //Đưa hàm vào xe tải
      >
        {this.props.children}
        {/* {khai báo biến Hello cho tat ca cac tập con bên trong children} */}
      </RoomContext.Provider>
    )
  }
}

const RoomConsumer = RoomContext.Consumer //thừa hưởng các state của RoomContext

//goi ra component chứa giá trị state value và tat ca cac bien props

export { RoomProvider, RoomConsumer, RoomContext }

export function withRoomConsumer(Component) {
  //Hàm này để gọi ra Hàm khác
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    )
  }
}
//RoomContext là xe tải truyền biến từ nhà cung cấp RoomProvider cho người tiêu dùng là RoomConsumer
