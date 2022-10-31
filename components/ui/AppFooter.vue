<template>
  <div class=" w-full border-t  h-[45px] bg-white px-[20px] py-[10px] ">
    <div class="flex justify-between flex-row  items-center">
      <div>
        <p class=" font-[400] text-[12px] leading-[16.41px] text-[#757575]   font-roboto ">
          2016-2019 @ Deskvantage, inc. All rights reserved.
        </p>
      </div>

      <select id="countries"
        class="font-[400] text-[12px] leading-[16.41px] h-[20px] font-roboto bg-white border text-[#757575] rounded-[4px] focus:outline-none p-0 w-[86px]">
        <option value="US" class="font-roboto">English(US)</option>
        <option value="FR" class="font-roboto">French</option>
        <option value="CA" class="font-roboto">China</option>
        <option value="SP" class="font-roboto">Spain</option>
      </select>
      
    </div>


  </div>
</template>
<script>
import FormCustomSelect from '../molecules/FormCustomSelect.vue';
export default {
  name: "AppFooter",
  components:{FormCustomSelect}
};
</script>
<style scoped>

</style>