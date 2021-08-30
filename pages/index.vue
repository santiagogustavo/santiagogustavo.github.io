<template>
  <div :class="$vuetify.breakpoint.smAndDown ? 'boot--mobile' : 'boot'">
    <p v-if="currentStep > 0" class="boot__processor">
      Main Processor : {{ processor }} <span class="cursor">_</span>
    </p>
    <p v-if="currentStep > 1" class="boot__memory">Memory Test &nbsp;&nbsp;&nbsp;: OK <span class="cursor">_</span></p>
    <br v-if="currentStep > 2"/>
    <p v-if="currentStep > 2" class="boot__master">
      Detecting Primary Master ... {{ master }}<span class="cursor">_</span>
    </p>
    <p v-if="currentStep > 3" class="boot__slave">
      Detecting Primary Slave &nbsp;... {{ slave }}<span class="cursor">_</span>
    </p>
    <br v-if="currentStep > 4" />
    <br v-if="currentStep > 4" />
    <p v-if="currentStep > 4">Booting partition /dev/sda0/...<span class="cursor">_</span></p>
  </div>
</template>

<script>
import Bowser from "bowser";

export default {
  name: 'Boot',
  layout: 'bios',
  data() {
    return {
      currentStep: 0,
      stepInterval: undefined,
      processor: undefined,
      master: undefined,
      slave: undefined,
    };
  },
  beforeDestroy() {
    clearInterval(this.stepInterval);
  },
  created() {
    this.stepInterval = setInterval(this.handleStepsInterval, 2500);
  },
  mounted() {
    const browser = Bowser.getParser(window.navigator.userAgent);
    this.processor = `${browser.getOSName()}/${browser.getOSVersion()}`;
    this.master = `${browser.getEngineName()}/${browser.getEngine()?.version}`;
    this.slave = browser.getPlatformType();
  },
  methods: {
    handleStepsInterval() {
      if (this.currentStep === 5) {
        clearInterval(this.stepInterval);
        this.$router.replace('/splash');
      }
      this.currentStep++;
    },
  },
};
</script>

<style lang="scss">
@keyframes cursor {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.cursor {
  display: none;
  color: white;
  animation: cursor 500ms step-start infinite;
}

.boot,
.boot--mobile {
  p {
    font-family: $font-family-ibm;
    margin-bottom: 4px;
  }

  p:last-of-type {
    .cursor {
      display: inline;
    }
  }
}

.boot--mobile {
  margin-top: 16px;
}
</style>
