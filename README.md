<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
        integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div id="weather">
        <input type="text" placeholder="Search..." class="search">

        <div class="content">
            <h1 class="vi_tri">
                <span class="city">City</span>
                <span>,</span>
                <span class="country">Country</span>
            </h1>

            <div class="time">Time</div>

            <div class="nhiet_do">
                <span class="value">
                    <sup>o</sup>C
                </span>
            </div>

            <div class="mo_ta">Clouds</div>

            <div class="item">
                <div class="nhin_xa">
                    <i class="far fa-eye"></i>
                    <span>Look forward</span>
                </div>

                <div class="gio">
                    <i class="fas fa-wind"></i>
                    <span>Speed</span>
                </div>

                <div class="do_am">
                    <i class="fas fa-cloud-sun"></i>
                    <span>Humidity</span>
                </div>

            </div>
        </div>
    </div>

    <script src="./main.js"></script>
</body>

</html>
