<template>
  <div class="row">
    <div class="col-8">
      <strong>{{calculationLineLabel}}</strong>
    </div>
    <div class="col-4">
      <strong>{{calculationLineValue}}</strong>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Invoice_Calculation_Line',
  props: {
    calculationLineValue: {
      type:Number
    },
    calculationLineLabel:{
      type:String
    }
  }
}
</script>
