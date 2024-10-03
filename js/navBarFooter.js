document.addEventListener("DOMContentLoaded", function() {

    // Determine the basePath based on the current path
    const currentPath = window.location.pathname;
    const basePath = currentPath.includes("/pages/") ? "../" : "";

    const navbarHTML = `
<nav>
<ul><img src="${basePath}img/city-of-jeff-logo.png" alt="">
<ul id="topNav">
    <li><a href="#">Home</a></li>
    <li><a href="#">Government <i class="fa-solid fa-arrow-down"></i></a>
        <ul id="dropLevel1">
            <li><a href="#">Mayor's Office</a></li>
            <li><a href="#">City Council</a></li>
            <li><a href="#">City Clerk</a></li>
            <li><a href="#">Departments</a>
                <ul id="dropLevel2">
                    <li><a href="#">Administration</a>
                        <ul>
                            <li><a href="#">Human Resources</a></li>
                            <li><a href="#">Communications</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Public Works & Utilities</a>
                        <ul id="dropLevel3">
                            <li><a href="#">Wastewater</a></li>
                            <li><a href="#">Storm Water</a></li>
                            <li><a href="#">Public Works</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Legal & Planning</a>
                        <ul id="dropLevel3">
                            <li><a href="#">Law</a></li>
                            <li><a href="#">Planning & Zoning</a></li>
                            <li><a href="#">Building Commission</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Finance & Economic Development</a>
                        <ul id="dropLevel3">
                            <li><a href="#">Economic and Redevelopment</a></li>
                            <li><a href="#">Finance</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><a href="#">Code of Conduct in City Buildings</a></li>
        </ul>
    </li>
    <li><a href="#">City Services <i class="fa-solid fa-arrow-down"></i></a>
        <ul id="dropLevel1">
            <li><a href="#">Public Safety</a>
                <ul id="dropLevel2">
                    <li><a href="#">Fire Department</a></li>
                    <li><a href="#">Police Department</a></li>
                    <li><a href="#">Animal Shelter</a></li>
                </ul>
            </li>
            <li><a href="#">Infrastructure</a>
                <ul id="dropLevel2">
                    <li><a href="#">Street Department</a></li>
                    <li><a href="#">Sanitation Department</a></li>
                    <li><a href="#">Utility Billing</a></li>
                </ul>
            </li>
            <li><a href="#">Environmental Management</a>
                <ul id="dropLevel2">
                    <li><a href="#">Floodplain Management</a></li>
                    <li><a href="#">Public Works</a></li>
                    <li><a href="#">Storm Water</a></li>
                </ul>
            </li>
            <li><a href="#">Recreation & Arts</a>
                <ul id="dropLevel2">
                    <li><a href="#">Parks and Recreation</a></li>
                    <li><a href="#">Jeffersonville Public Art</a></li>
                </ul>
            </li>
        </ul>
    </li>
    <li><a href="#">Business <i class="fa-solid fa-arrow-down"></i></a>
        <ul id="dropLevel1">
            <li><a href="#">Starting a Business</a></li>
            <li><a href="#">Economic Development Programs</a>
                <ul id="dropLevel2">
                    <li><a href="#">Available Commercial Properties</a></li>
                    <li><a href="#">10th Street Facade Program</a></li>
                    <li><a href="#">Jeffersonville Restaurant Forgivable Loan Program</a></li>
                </ul>
            </li>
            <li><a href="#">Planning and Zoning</a></li>
            <li><a href="#">Business Resources</a>
                <ul id="dropLevel2">
                    <li><a href="#">One Southern Indiana</a></li>
                    <li><a href="#">River Ridge</a></li>
                    <li><a href="#">Urban Enterprise Zone</a></li>
                </ul>
            </li>
            <li><a href="#">TIF Map</a></li>
        </ul>
    </li>
    <li><a href="#">Community <i class="fa-solid fa-arrow-down"></i></a>
        <ul id="dropLevel1">
            <li><a href="#">Arts & Culture</a>
                <ul id="dropLevel2">
                    <li><a href="#">Arts and Culture District</a></li>
                    <li><a href="#">RiverStage</a></li>
                </ul>
            </li>
            <li><a href="#">Recreation</a>
                <ul id="dropLevel2">
                    <li><a href="#">Parks & Recreation</a></li>
                    <li><a href="#">Designated Outdoor Refreshment Area (DORA)</a></li>
                </ul>
            </li>
            <li><a href="#">City Pride</a></li>
            <li><a href="#">Move to Jeffersonville</a></li>
        </ul>
    </li>
    <li><a href="#">How Do I <i class="fa-solid fa-arrow-down"></i></a>
        <ul id="dropLevel1">
            <li><a href="#">FAQs, payments, and guides for interacting with the city</a></li>
        </ul>
    </li>


</ul>

<ul id="navIcons">
    <li><i class="fa-solid fa-magnifying-glass"></i></li>
    <li><i class="fa-solid fa-bars"></i></li>
</ul>

</nav>
`

const footerHTML = `
<footer>


        

</footer>`
                
    // Append navbar and footer safely
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});

