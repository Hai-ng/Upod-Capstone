const stateDefault = {
    // mangRap:[],
    // chiTietRap: [],
    // tenRap:'',
    // diaChiRap:'',
    // thongTinLichChieu:[],
    // thongTinHeThongRap:[],
    arrDeviceType: [
    //     {
    //     "id": "1",
    //     "service_id": "123",
    //     "device_type_name": "Camera",
    //     "desciption": "Thiết bị theo dõi",
    //     "is_delete": false,
    //     "create_date": "2022-09-22T05:04:11.94",
    //     "update_date": "2022-09-22T05:11:47.57"
    // },
    ],
};

export const QuanLyDeviceTypeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'SET_ListDeviceType': {
            state.arrDeviceType = action.arrDeviceType;
            return { ...state };
        }

        default: return { ...state }
    }
}
