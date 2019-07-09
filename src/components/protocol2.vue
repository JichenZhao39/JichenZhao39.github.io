<template>
  <div>
    <headerVue></headerVue>
    <div class="nav-line"></div>
    <!--start-->
    <p>
      The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
      Advertisements
      Ads appearing on our website may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by us and does not cover the use of cookies by any advertisers.
      Links To External Sites
      Our Service may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy and terms and conditions of every site you visit.
      We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services.
      Aggregated Statistics
      We may collect statistics about the behavior of visitors to its website. We may display this information publicly or provide it to others. However, we does not disclose your personally-identifying information.
      Cookies
      To enrich and perfect your online experience, we . uses "Cookies", similar technologies \
    </p>

    <!--end-->
    <footerVue></footerVue>
  </div>
</template>

<script>
  import headerVue from './header'
  import footerVue from './footer'
  export default {
    components:{headerVue,footerVue},
    data () {
      return {

      }
    },
    methods:{


    }
  }
</script>

<style scoped>
  /*nav下面的线*/
  .nav-line {
    margin-top: 90px;
  }
</style>
