document.getElementById("navbar").innerHTML=`<header>
<nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
  <div class="container-fluid">
    <a href="/index.html" class="navbar-brand">
      <img src="/assets/brand.png" alt="GLC CZ" width="100em" height="33.6em">
      <!--Add brand logo-->
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <a id="home" class="nav-link" href="/index.html">Domů</a>
        </li>
        <li class="nav-item">
          <a id="rules" class="nav-link" href="/rules.html">Pravidla</a>
        </li>
        <li class="nav-item dropdown">
          <a id="leaders" class="nav-link dropdown-toggle" href="/leaders.html" id="navbarDropdown" role="button" data-bs-toggle="dropdown"> Gym Leadeři </a>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="/leaders.html">Gym Leadeři</a>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li>
              <a class="dropdown-item" href="/leaders.html#grass">Grass</a>
            </li>
            <li>
              <a class="dropdown-item" href="/leaders.html#fire">Fire</a>
            </li>
            <li>
              <a class="dropdown-item" href="/leaders.html#water">Water</a>
            </li>
            <li>
              <a class="dropdown-item" href="/leaders.html#lightning">Lightning</a>
            </li>
            <li>
              <a class="dropdown-item" href="/leaders.html#psychic">Psychic</a>
            </li>
            <li>
              <a class="dropdown-item" href="/leaders.html#darkness">Darkness</a>
            </li>
            <li>
              <a class="dropdown-item" href="/leaders.html#metal">Metal</a>
            </li>
            <li>
              <a class="dropdown-item" href="/leaders.html#dragon">Dragon</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.toredo.cz/" target="_blank">Eshop</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</header>`;

function Activate(id){
    document.getElementById(id).classList.add("active");
}