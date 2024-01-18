
<!-- Header.svelte -->
<script>
  export let showBackground = false;
</script>

<header class:has-background={showBackground}>
  <div class="background">
    <div class="hero_area">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#3a2a00" />
        </g>
      </svg>
    </div>
  </div>

	<nav class="container">
		<a href="/"><img src="/home-button.svg" height="25"></a>
    <a href="/contact" title="email icons"><img src="/mail-inbox-app.png" height="25"></a>
    <a href="https://github.com/johnjallday/">
      <img src="/github-mark.png" alt="GitHub Mark" width="25" height="25" />
    </a>
    <a href="https://instagram.com/johnj.alldayok">
      <img src="/Instagram_Glyph_Black.png" alt="instagram" width="25" height="25" />
    </a>
	</nav>

	<nav class="page_nav">
		<a href="/">Main</a>
		<a href="/logs">Logs</a>
	</nav>
</header>

<style>
  /* Waves Animation start*/
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* Push the background behind the content */
  }

  .hero_area {
    position: relative;
    height: 50vh;
    background-color: #ffb800;
  }

  .waves {
    position: absolute;
    width: 100%;
    height: 15vh;
    min-height: 100px;
    max-height: 150px;
    bottom: 0;
    left: 0;
  }

  .parallax>use {
    animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
  }

  .parallax>use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }

  .parallax>use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }

  .parallax>use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }

  .parallax>use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }

  @keyframes move-forever {
    0% {
      transform: translate3d(-90px, 0, 0);
    }

    100% {
      transform: translate3d(85px, 0, 0);
    }
  }

  /* Shrinking for mobile */
  @media (max-width: 768px) {
    .waves {
      height: 40px;
      min-height: 40px;
    }
  }
  /* Waves Animation end */
</style>
