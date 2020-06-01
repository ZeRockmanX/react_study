import Mock from 'mockjs'

export default Mock.mock('/get_mock_data', 'get', {
    "data": {
        "list": [
            'mock case 7',
            'mock case 8',
            'mock case 9',
        ]
    }
})
