<template>
  <div v-if="geoJson" style="height: 100%;">
    <Map3D :geo-json="geoJson" :dbl-click-fn="dblClickFn" :projection-fn-param="projectionFnParam" />
  </div>
</template>

<script>
import axios from 'axios';
import Map3D from './map3d'; // Assuming the Vue conversion of the Map3D component

export default {
  components:{
    Map3D
  },
  data() {
    return {
      geoJson: null,
      mapAdCode: 100000, // 默认的中国adcode码
      projectionFnParam: {
        center: [104.0, 37.5],
        scale: 40,
      },
      mapScale: {
        province: 100,
        city: 200,
        district: 300,
      }
    };
  },
  methods: {
    queryMapData(code) {
      try {
        axios.get(`https://geo.datav.aliyun.com/areas_v3/bound/${code}_full.json`)
        .then(response => {
          this.geoJson = response.data;
        });
      } catch (error) {
        console.error(error);
      }
    },
    dblClickFn(customProperties) {
      this.mapAdCode = customProperties.adcode;
      console.log('mapAdCode',this.mapAdCode)
      this.queryMapData(this.mapAdCode)
      this.projectionFnParam = {
        center: customProperties.centroid,
        scale: this.mapScale[customProperties.level],
      };
    }
  },
  mounted() {
    this.queryMapData(this.mapAdCode);
  }
};
</script>
