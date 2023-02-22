
import { faCoffee, faVideo, faStar, faBolt, faChartLine, faChartColumn, faFloppyDisk, faChartArea, faGear } from '@fortawesome/free-solid-svg-icons'



const dataTitleMobile = [
    {
        id: 1,
        title: "XSMN",
        active: true
    },
    {
        id: 2,
        title: "XSMT"
    },
    {
        id: 3,
        title: "XSMB"
    },
    {
        id: 4,
        title: "XSDT"
    },
    {
        id: 5,
        title: "MUA VÉ"
    },
    {
        id: 6,
        title: "MEGA"
    },
    {
        id: 7,
        title: "POWER"
    },
    {
        id: 8,
        title: "3DPRO"
    },
    {
        id: 9,
        title: "MAX3D"
    },
    {
        id: 10,
        title: "KENO",
        active: true
    },
]
const dataTrucTiep = [
    {
        id: '1',
        title: 'Trực tiếp xổ số Miền Nam'
    },
    {
        id: '2',
        title: 'Trực tiếp xổ số Miền Bắc'
    },
    {
        id: '3',
        title: 'Trực tiếp xổ số Miền Trung'
    },
    {
        id: '4',
        title: 'Trực tiếp xổ số Mega'
    },
    {
        id: '5',
        title: 'Trực tiếp xổ số Power'
    },
    {
        id: '6',
        title: 'Trực tiếp xổ số Max3D Pro'
    },
    {
        id: '7',
        title: 'Trực tiếp xổ số Max3D'
    }

]

const dataKQXSTruyenThong = [
    {
        id: '1',
        title: 'Kết quả xổ số Miền Nam',
        titleMini: [
            {
                id: '1',
                title: 'Thứ 2'
            },
            {
                id: '2',
                title: 'Thứ 3'
            },
            {
                id: '3',
                title: 'Thứ 4'
            },
            {
                id: '4',
                title: 'Thứ 5'


            },
            {
                id: '5',
                title: 'Thứ 6'
            },
            {
                id: '6',
                title: 'Thứ 7'
            },
            {
                id: '7',
                title: 'Chủ nhật'
            }
        ]
    },
    {
        id: '2',
        title: 'Kết quả xổ số Miền Bắc',
        titleMini: [
            {
                id: '1',
                title: 'Thứ 2'
            },
            {
                id: '2',
                title: 'Thứ 3'
            },
            {
                id: '3',
                title: 'Thứ 4'
            },
            {
                id: '4',
                title: 'Thứ 5'


            },
            {
                id: '5',
                title: 'Thứ 6'
            },
            {
                id: '6',
                title: 'Thứ 7'
            },
            {
                id: '7',
                title: 'Chủ nhật'
            }
        ]
    },
    {
        id: '3',
        title: 'Kết quả xổ số Miền Trung',
        titleMini: [
            {
                id: '1',
                title: 'Thứ 2'
            },
            {
                id: '2',
                title: 'Thứ 3'
            },
            {
                id: '3',
                title: 'Thứ 4'
            },
            {
                id: '4',
                title: 'Thứ 5'


            },
            {
                id: '5',
                title: 'Thứ 6'
            },
            {
                id: '6',
                title: 'Thứ 7'
            },
            {
                id: '7',
                title: 'Chủ nhật'
            }
        ]
    },
    {
        id: '4',
        title: 'KQXS Các tỉnh ',
        titleMini: [
            {
                id: '1',
                title: "Miền Bắc",
                
            },
            {
                id: '2',
                title: "Miền Trung",
            }
        ]
    }
]

const dataDienToan = [
    {
        id: '1',
        title: 'Xổ số Mega 6/45'

    },
    {
        id: '2',
        title: 'Xổ số Power 6/55'
    },
    {
        id: '3',
        title: 'Xổ số Max3D'
    },
    {
        id: '4',
        title: 'Xổ số Max4D'
    },
];

const dataDauDuoi = [
    {
        id: '1',
        title: "Xổ số Miền Nam"
    },
    {
        id: '2',
        title: "Xổ số Miền Bắc"
    },
    {
        id: '3',
        title: "Xổ số Miền Trung"
    },
]

const dataThongKe = [
    {
        id: '1',
        title: 'Thống kê xổ số Miền Nam'
    },
    {
        id: '2',
        title: 'Thống kê xổ số Miền Bắc'
    },
    {
        id: '3',
        title: 'Thống kê xổ số Miền Trung'
    },
]

const dataInVeDo = [
    {
        id: '1',
        title: 'In vé số Miền Nam'
    },
    {
        id: '2',
        title: 'In vé số Miền Bắc'
    },
    {
        id: '3',
        title: 'In vé số Miền Trung'
    },
]

const dataThongKeXS = [
    {
        id: '1',
        title: 'Thống kê xổ số Miền Nam'
    },
    {
        id: '2',
        title: 'Thống kê xổ số Miền Bắc'
    },
    {
        id: '3',
        title: 'Thống kê xổ số Miền Trung'
    },
    {
        id: '4',
        title: 'Thống kê xổ số Mega'
    }
]
const dataTitlePC = [
    {
        id: 1,
        icon: faVideo,
        title: "Trực tiếp",
        listItem :dataTrucTiep,
    },
    {
        id: 2,
        icon: faStar,
        title: "KQXS Truyền thống",
        listItem :dataKQXSTruyenThong,

    },
    {
        id: 3,
        icon: faBolt,
        title: "KQXS Điện Toán",
        listItem :dataDienToan,
    },
    {
        id: 4,
        icon: faChartLine,
        title: "Sớ Đầu Đuôi",
        listItem :dataDauDuoi,
    },
    {
        id: 5,
        icon: faChartColumn,
        title: "Thống Kê",
        listItem :dataThongKe,
    },
    {
        id: 6,
        icon: faFloppyDisk,
        title: "In Vé Dò",
        listItem :dataInVeDo,
    },
    {
        id: 7,
        icon: faChartArea,
        title: "Thống Kê Xổ Số",
        listItem :dataThongKeXS,
    },
    {
        id: 8,
        icon: faGear,
        title: "KENO1",
        listItem :dataThongKeXS,
        active: true,

    }
]
export {
    dataTitlePC,
    dataTitleMobile, dataTrucTiep, dataKQXSTruyenThong, dataDienToan, dataDauDuoi, dataThongKe, dataInVeDo, dataThongKeXS
}
