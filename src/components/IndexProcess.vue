<template>
  <div class="main_common_box">
    <Layout :style="{padding: '0 24px 24px'}">
      <Breadcrumb :style="{margin: '12px 0'}">
        <BreadcrumbItem>科研简介</BreadcrumbItem>
        <BreadcrumbItem>科研进程</BreadcrumbItem>
      </Breadcrumb>
      <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
        <Carousel autoplay v-model="value2" autoplay-speed="5000"  height="400px" loop>
          <CarouselItem>
            <div class="demo-carousel">
              <img src="../assets/img/55.jpg" alt="">
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
              <img src="../assets/img/55.jpg" alt="">
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
              <img src="../assets/img/55.jpg" alt="">
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
              <img src="../assets/img/55.jpg" alt="">
            </div>
          </CarouselItem>
        </Carousel>
      </Content>
    </Layout>
    <div>
      <section class="article-content">
        <div class="article-protect-tab">
          <span>项目进展</span>
        </div>
        <div class="article-protect-body">
          <img src="../assets/img/proce1.jpg">
          <ul>
            <li>
              <a href="article_list_content.html">
                <h3>科研进程1</h3><span>2017-07</span>
              </a>
              <p>项目组赴内蒙古乌海及宁夏灵武考察</p>
            </li>
            <li>
              <a href="article_list_content.html">
                <h3>科研进程2</h3>
                <span>2017-09</span>
              </a>
              <p>在北京林业大学召开项目启动会</p>
            </li>
            <li>
              <a href="article_list_content.html">
                <h3>科研进程3</h3>
                <span>2017-10</span>
              </a>
              <p>项目组在第二届国际土地复垦会议中召开西部矿区生态修复专项会议</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
    <div class="news-info">
      <h2>科研进程</h2>
      <div>
        <ul>
          <li><img src="../assets/img/proce4.jpg"><div><p>监测点1</p><span>2017年11月 项目组在北京林业大学召开课题实施方案论证会</span><a href="article_list.html">MORE</a></div></li>
          <li><img src="../assets/img/proce5.jpg"><div><p>监测点2</p><span>2017年12月 项目组赴内蒙古乌海市进行观测实验</span><a href="article_list.html">MORE</a></div></li>
          <li><img src="../assets/img/proce6.jpg"><div><p>监测点3</p><span>2018年2月 项目组参与内蒙古乌海市马万良焦化厂绿化工程</span><a href="article_list.html">MORE</a></div></li>
          <li><img src="../assets/img/proce7.jpg"><div><p>监测点1</p><span>2018年3月 项目组赴宁夏与宁煤集团研究示范工程</span><a href="article_list.html">MORE</a></div></li>
          <!--<li><img src="../assets/img/proce2.jpg"><div><p>监测点2</p><span>国污费还会列入未来环境税征收范围</span><a href="article_list.html">MORE</a></div></li>-->
          <!--<li><img src="../assets/img/proce2.jpg"><div><p>监测点3</p><span>相会列入未来环境税征收范围</span><a href="article_list.html">MORE</a></div></li>-->

        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'IndexProcess',
    data () {
      return {
        value2:0
      }
    }
  }
</script>

<style scoped>
  .main_common_box span{
    text-align: left;
    font-weight: 600;
    font-size: 14px;
  }
  .am-slider .am-slides>li {
    /*display: none;*/
    -webkit-backface-visibility: hidden;
    position: relative;
    list-style: none;
  }
  .am-slider .am-slides img {
    width:100%;
    height: 450px;margin-top:20px;
    background-size:1200px 450px;
  }
  img {
    box-sizing: border-box;
    vertical-align: middle;
  }
  .article-content {
    max-width: 1100px;
    margin: 0 auto;
    overflow: hidden;
    padding: 0;
  }
  .article-protect-tab {
    text-align: center;
    padding: 3rem 0;
  }
  .article-protect-tab span {
    border: 1px solid #aaa;
    width: 120px;
    display: inline-block;
    text-align: center;
    height: 30px;
    line-height: 30px;
    border-radius: 22px;
    font-size: 14px;
    font-weight: 700;
    margin: 0 1rem;
    cursor: pointer;
  }
  .article-protect-body {
    width: 100%;
    height: 350px;
  }
  .article-protect-body img {
    max-width: 40%;
    float: left;
  }
  .article-protect-body ul {
    margin: 0;
    width: 53%;
    display: inline-block;
    float: right;
    text-align: center;

  }
  .article-protect-body ul li {
    display: block;
    text-indent: 2em;
    border-bottom: 1px dashed #b0b0b0;
    margin-top: 10px;
  }
  .article-protect-body ul li a,p{
    margin: .5rem 0 1rem;
    /*font-size: 1.4rem;*/
    font-size: 14px;
  }
  .article-content ul li h3 {
    color: #000;
    display: inline-block;
  }
  .article-protect-body ul li span {
    float: right;
    color: #000;
    font-weight: 600;
  }
  .news-info {
    max-width: 100%;
    height:550px;
    text-align: center;
    overflow: auto;
    margin-bottom: 10rem;
  }
  .news-info h2 {
    display: block;
    width: 100px;
    margin: 40px auto;
    padding: 3px 0;
    border-bottom: 2px solid #000;
    font-size: 14px;
  }
  .news-info>div ul {
    float: left;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  .news-info>div ul li {
    width: 100%;
    list-style: none;
    float: left;
    margin-bottom: 23px;
  }

  .news-info>div ul li img {
    width: 172px;
    float: left;
  }
  .news-info>div ul li p {
    float: left;
    width: 71%;
    text-align: center;
    color: black;
    margin: 5px 0 0 10px;
  }

  .news-info>div ul li span {
    float: left;
    width: 71%;
    text-align: center;
    color: #ababab;
    margin: 5px 0 0 10px;
  }
  .news-info>div ul li a {
    border: 1px solid #999;
    color: #000;
    display: block;
    width: 90px;
    text-align: center;
    height: 28px;
    float: right;
  }


</style>

