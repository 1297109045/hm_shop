import wepy from "wepy"

export default class Home extends wepy.mixin{
    data = {
        //轮播图数据
        swiperData: [],
        //分类数据
        cateData: [],
        floorData:[]

    }

    config = {
    }

    methods = {

    }
    async getSwiperData() {
        var { data } = await wepy.get('/home/swiperdata')
        // console.log(data)
        if (data.meta.status !== 200) {
            return wepy.baseToast()
        }
        wepy.baseToast('获取成功','success')
        this.swiperData = data.message
        this.$apply()
    }
    //获取分类的数据
    async getCateData() {
        var { data } = await wepy.get('/home/catitems')
        // console.log(data)
        if (data.meta.status !== 200) {
            return wepy.baseToast()
        }
        this.cateData = data.message
        this.$apply()
    }
    //楼层
    async getFloorData(){
        const {data} = await wepy.get('/home/floordata')
        if(data.meta.status !==200){
            return wepy.baseToast()
        }
        console.log(data)
        this.floorData = data.message
        this.$apply()
       
    }
    onLoad() {
        this.getSwiperData()
        this.getCateData()
        this.getFloorData()
    }

}