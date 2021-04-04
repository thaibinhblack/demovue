const vi = {
  app: 'Demo',
  modal: {  
    button: {
      name: 'Mở modal',
    },
    code: {
      javscript: 'Javscript',
      html: 'HTML',
    },
    close: 'Đóng',
    event: {
      name: 'Sự kiện',
      data: [
       {
         option: 'close',
         default: '',
         des: `
          Sự kiện đóng Modal <br />
          return false;
         `
       }
      ]
    },
    name: 'Modal',
    props: {
      description: {
        
      }
    },
    props: {
      name: 'Props',
      data: [
        {
          option: 'title',
          default: '',
          des: `
            Type: String <br/> 
            Tiêu đề - Hiển thị ở block Header của Modal
          `
        },
        {
          option: 'value',
          default: false,
          des: ''
        },
        {
          option: 'position',
          default: 'center',
          des: `
            Có 3 vị trí cho Modal:  <br />
            - <strong>center:</strong>  Mặc định width: 50% <br />
            - <strong>left:</strong> height: 100%  <br />
            - <strong>right:</strong> height: 100%  <br />
          `
        },
        {
          option: 'full',
          default: false,
          des: `
            Type: Boolean <br />
            khi <strong> full = true </strong> thì width = 100%, height = 100% màn hình
          `
        },
        {
          option: 'outside',
          default: false,
          des: `
            Type: Boolean <br />
            Khi <strong> outside = true </strong> thì click bên ngoài modal sẽ không đóng lại được
          `
        },
  
        {
          option: 'closeX',
          default: false,
          des: `
            Type: Boolean <br />
            khi <strong> closeX = true </strong> thì ẩn button đóng ở header
          `
        }
      ]
    },
    table: {
      heads: [
        {
          name: 'Option',
          key: 'option'
        },
        {
          name: 'Deafult',
          key: 'default',
        },
        {
          name: 'Description',
          key: 'des',
        }
      ]
    },
    slot: {
      name: 'Slot',
      data:  [
        {
          option: 'default',
          default: '',
          des: `
            Khối body của Modal
          `
        },
        {
          option: 'header',
          default: '',
          des: `
            Khối header của Modal
          `
        },
        {
          option: 'footer',
          default: '',
          des: `
            Khối footer của Modal
          `
        },
      ]
    },
  },
  language: {
    name: 'Ngôn Ngữ',
    vietnam: 'Tiếng Việt',
    english: 'Tiến Anh'
  },
  errors: {
    notDefine: '{name} Chưa được khai báo!',
  },
}

export default vi;