<?php $title = "Navbar"; ?>

<?php require_once('navbar.php'); ?>
<?php require_once('header.php'); ?>
  
  
  
  <!-- NAVBAR -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="d-flex flex-grow-1">
            <!-- <span class="w-100 d-lg-none d-block"></span> -->
            <!-- hidden spacer to center brand on mobile -->




            <a class="navbar-brand" href="index.html">
                <img src="images/logo.png" width="175" height="" class="d-inline-block align-top" alt="">
                <!-- <i class="fas fa-campground"></i>
                Gabe's Camping Co. -->
            </a>


            <a class="navbar-brand-two mx-auto d-lg-none d-inline-block" href="#">

            </a>
            <div class="w-100 text-right">
                <i class="fas fa-shopping-cart"></i>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">

                    <span>
                        <i class="fas fa-map"></i>
                    </span>
                </button>
            </div>
        </div>

        <div class="collapse navbar-collapse flex-grow-1 text-left" id="myNavbar">

            <ul class="navbar-nav ml-auto flex-nowrap">

                <li class="nav-item">
                    <a href="index.html" class="nav-link m-2 menu-item nav-active">Home</a>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle m-2 " href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Products
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Backpacks</a>
                        <a class="dropdown-item" href="#">Tents</a>
                        <!-- <div class="dropdown-divider"></div> -->
                        <a class="dropdown-item" href="#">Water</a>
                    </div>
                </li>




                <li class="nav-item">
                    <a href="help.html" class="nav-link m-2 menu-item">FAQ</a>
                </li>
                <li class="nav-item">
                    <a href="blog.html" class="nav-link m-2 menu-item">GCC Blog</a>
                </li>
            </ul>
        </div>
    </nav>