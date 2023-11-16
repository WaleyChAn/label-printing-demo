<template>
  <div class="demo-print">
    <div class="demo-print__btn" @click="onPrint()">打印</div>
    <div>
      <div ref="refPrintContent" id="printContent">
        <div
          class="demo-print__content"
          style="
            width: 300px;
            height: 165px;
            overflow: hidden;
            padding-top: 5px;
            page-break-after: always;
          "
        >
          <div class="demo-print__left" style="float: left; width: 96px">
            <div class="demo-print__logo">
              <img
                :src="imgLogo"
                alt="logo"
                style="display: block; margin: 0; width: 100%"
              />
            </div>
            <div class="demo-print__qr">
              <img
                :src="imgQr"
                alt="qr"
                style="display: block; margin: 0; width: 100%"
              />
            </div>
          </div>
          <div
            class="demo-print__right"
            style="float: left; width: 190px; margin-left: 10px"
          >
            <dl style="margin: 0">
              <dt style="font-size: 14px; line-height: 14px">Asset Number:</dt>
              <dd
                style="
                  margin: 0;
                  font-size: 26px;
                  line-height: 26px;
                  width: 90%;
                  word-break: break-all;
                "
              >
                CN234383
              </dd>
            </dl>
            <dl style="margin: 5px 0 0 0">
              <dt style="font-size: 14px; line-height: 14px">
                Purchasing Date:
              </dt>
              <dd
                style="
                  margin: 0;
                  font-size: 26px;
                  line-height: 26px;
                  width: 90%;
                  word-break: break-all;
                "
              >
                2023-08-23
              </dd>
            </dl>
            <dl style="margin: 5px 0 0 0">
              <dt style="font-size: 14px; line-height: 14px">Serial Number:</dt>
              <dd
                style="
                  margin: 0;
                  font-size: 26px;
                  line-height: 26px;
                  width: 90%;
                  word-break: break-all;
                "
              >
                5CG3332C32C17
              </dd>
            </dl>
          </div>
        </div>
        <div
          class="demo-print__content"
          style="
            width: 300px;
            height: 165px;
            overflow: hidden;
            padding-top: 5px;
            page-break-after: always;
          "
        >
          <div class="demo-print__left" style="float: left; width: 96px">
            <div class="demo-print__logo">
              <img
                :src="imgLogo"
                alt="logo"
                style="display: block; margin: 0; width: 100%"
              />
            </div>
            <div class="demo-print__qr">
              <img
                :src="imgQr"
                alt="qr"
                style="display: block; margin: 0; width: 100%"
              />
            </div>
          </div>
          <div
            class="demo-print__right"
            style="float: left; width: 190px; margin-left: 10px"
          >
            <dl style="margin: 0">
              <dt style="font-size: 14px; line-height: 14px">Asset Number:</dt>
              <dd
                style="
                  margin: 0;
                  font-size: 26px;
                  line-height: 26px;
                  width: 90%;
                  word-break: break-all;
                "
              >
                CN234383
              </dd>
            </dl>
            <dl style="margin: 5px 0 0 0">
              <dt style="font-size: 14px; line-height: 14px">
                Purchasing Date:
              </dt>
              <dd
                style="
                  margin: 0;
                  font-size: 26px;
                  line-height: 26px;
                  width: 90%;
                  word-break: break-all;
                "
              >
                2023-08-23
              </dd>
            </dl>
            <dl style="margin: 5px 0 0 0">
              <dt style="font-size: 14px; line-height: 14px">Serial Number:</dt>
              <dd
                style="
                  margin: 0;
                  font-size: 26px;
                  line-height: 26px;
                  width: 90%;
                  word-break: break-all;
                "
              >
                5CG3332C32C17
              </dd>
            </dl>
          </div>
        </div>
        <div
          class="demo-print__content"
          style="
            width: 300px;
            height: 165px;
            overflow: hidden;
            padding-top: 5px;
            page-break-after: always;
          "
        >
          <div class="demo-print__left" style="float: left; width: 96px">
            <div class="demo-print__logo">
              <img
                :src="imgLogo"
                alt="logo"
                style="display: block; margin: 0; width: 100%"
              />
            </div>
            <div class="demo-print__qr">
              <img
                :src="imgQr"
                alt="qr"
                style="display: block; margin: 0; width: 100%"
              />
            </div>
          </div>
          <div
            class="demo-print__right"
            style="float: left; width: 190px; margin-left: 10px"
          >
            <dl style="margin: 0">
              <dt style="font-size: 14px; line-height: 14px">Asset Number:</dt>
              <dd
                style="
                  margin: 0;
                  font-size: 26px;
                  line-height: 26px;
                  width: 90%;
                  word-break: break-all;
                "
              >
                CN234383
              </dd>
            </dl>
            <dl style="margin: 5px 0 0 0">
              <dt style="font-size: 14px; line-height: 14px">
                Purchasing Date:
              </dt>
              <dd
                style="
                  margin: 0;
                  font-size: 26px;
                  line-height: 26px;
                  width: 90%;
                  word-break: break-all;
                "
              >
                2023-08-23
              </dd>
            </dl>
            <dl style="margin: 5px 0 0 0">
              <dt style="font-size: 14px; line-height: 14px">Serial Number:</dt>
              <dd
                style="
                  margin: 0;
                  font-size: 26px;
                  line-height: 26px;
                  width: 90%;
                  word-break: break-all;
                "
              >
                5CG3332C32C17
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import printjs from 'print-js'
import printjs from '@/plugins/print.js'
// import 'print-js/dist/print.css'
// import html2canvas from 'html2canvas'

export default {
  name: 'DemoPage',
  data() {
    return {
      imgLogo: require('@/assets/images/logo.png'),
      imgQr: require('@/assets/images/qr.png')
    }
  },
  methods: {
    onPrint() {
      const printStyle = document.createElement('style')
      const printStyleContent = `
        body {
          margin: 0;
          padding: 0;
          border: 0;
        }
        img {
          display: block;
          margin: 0;
          padding: 0;
          border: 0;
        }
        .ignoreElements {
          display: none;
        }
        @page {
          size: auto;
          margin: 0;
        }
      `
      printStyle.textContent = printStyleContent
      // document.head.appendChild(printStyle)

      // html2canvas(this.$refs.refPrintContent, {
      //   backgroundColor: 'white',
      //   useCORS: true,
      //   foreignObjectRendering: false,
      //   width: 300,
      //   height: 180,
      //   scale: 5
      // }).then((canvas) => {
      //   const url = canvas.toDataURL()
      //   printjs({
      //     printable: url,
      //     type: 'image',
      //     documentTitle: '--',
      //     style: printStyleContent,
      //     base64: 'true'
      //   })

      //   // document.head.removeChild(printStyle)
      // })
      printjs({
        printable: 'printContent',
        type: 'html',
        targetStyles: ['*'],
        style: printStyleContent
      })
    }
  }
}
</script>

<style scoped>
.demo-print__btn {
  width: 200px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background: #fc8b8b;
  font-size: 14px;
  margin-bottom: 10px;
  cursor: pointer;
}
/* .demo-print__content {
  display: flex;
  width: 300px;
  height: 180px;
  font-family: FZHTJW;
  overflow: hidden;
}

.demo-print__left {
  width: 105px;
  overflow: hidden;
}

.demo-print__left {
  display: flex;
  flex-direction: column;
  padding-right: 5px;
}

.demo-print__right {
  flex: 1;
  padding: 5px;
}

.demo-print__logo img {
  display: block;
  width: 100%;
}

.demo-print__qr {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.demo-print__qr img {
  display: block;
  width: 100%;
}

.demo-print__right dl {
  margin: 0;
  padding: 0;
  margin-top: 5px;
  width: 90%;
}

.demo-print__right dl:first-child {
  margin: 0;
}

.demo-print__right dl dt {
  font-size: 16px;
  line-height: 16px;
}

.demo-print__right dl dd {
  padding: 0;
  margin: 0;
  font-size: 26px;
  line-height: 26px;
  word-break: break-all;
} */
</style>
