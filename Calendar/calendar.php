<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/png" href="/Images/Logo.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link rel="stylesheet" type="text/css" href="settings.css">
    <link rel="stylesheet" type="text/css" href="calendar.css">
    <link rel="stylesheet" type="text/css" href="calendar2.css">
    <link rel="stylesheet" type="text/css" href="addevent.css">
    <link rel="stylesheet" type="text/css" href="todolist.css">
    <link rel="stylesheet" href="https://unpkg.com/simplebar@latest/dist/simplebar.min.css">
    <title>CoFollow</title>
</head>
<body>
    <header class="navbar">
        <div class="logo">
            <b><a class="title" href="/CoFollowDashboard/" >CoFollow</a></b>
            <b><a>| </a><a> Calendar</b> </a>
        </div>  
        <div class="settings-widget">
            <button id="settings-btn">
                <img src="icons/down.png" alt="Down Arrow" class="down-icon">
            </button>
            <div class="dropdown-content" id="dropdown-content">
                <a href="#">
                    <img src="icons/user.png" alt="User" width="15" height="19">
                    Profile
                </a>
                <a href="#">
                    <img src="icons/settings.png" alt="Settings" width="15" height="19">
                    Settings
                </a>
                <a href="#">
                    <img src="icons/logout.png" alt="Logout" width="15" height="19">
                    Log-out
                </a>
            </div>
        </div>
    </header>
    <div class="currenteventsection" style="display: none;">
        <h1>Current Event</h1>
        <div class="currentevent" alt="Image">
            <img src="" alt="">
        </div>
        <h2 id="event_title"></h2>
    </div>
        
    <div class="calendar-container">
        <select id="nameSelect">
            <option value="name1">Upcoming Events</option>
            <option value="name2">To-Do-list</option>
        </select>
        <div id="left_container" style="display: block;">

          
            <div id="slides" data-simplebar>
                <div id="overflow" style="display: flex; flex-direction: column;">
                    <div class="scrollable-section inner">
                        <div class="slide_1">
                            <div class="slide-content">
                                <h2 id="currentmonth">Month of </h2>
                                <?php
                                include 'connection.php';

                                $sql = "SELECT * FROM `events`"; // Assuming 'events' is the name of your table
                                $result = $conn->query($sql);

                                if ($result && $result->num_rows > 0) {
                                    while ($row = $result->fetch_assoc()) {
                                ?>
                                <div class="element" id="testelement" style="background-image: url('');">
                                    <h3><?php echo $row['event_name']; ?></h3>
                                    <div id="datedata" class="datedata">
                                        <h4><?php echo $row['event_date']; ?></h4>
                                    </div>
                                </div>
                                <?php
                                    }
                                } else {
                                    echo "No events found";
                                }
                                ?>
                            </div>
                        </div>
                    </div>
                    <?php 
                    include 'connection.php';

                    $sql = "SELECT * FROM `todolists`";
                    $result = $conn->query($sql);

                    if (!$result) {
                        die("Error executing the query: " . $conn->error);
                    }

                    ?>

                    <div class="scrollable-section inner">
                        <div class="slide_2" style="display: none;">
                            <div class="slide-content">
                                <h2>Your to-do-list</h2>
                                <?php
                                if ($result->num_rows > 0) {
                                    while ($row = $result->fetch_assoc()) {
                                ?>
                                <div class="element" id="elementid_<?php echo $row['todo_id']; ?>">
                                    <h3><?php echo $row['todo_title']; ?><br><?php echo $row['todo_description']; ?></h3>
                                    <div class="datedata">
                                        <h4><?php echo $row['todo_date']; ?></h4>
                                    </div>
                                </div>
                                <?php
                                    }
                                } else {
                                    echo "No to-do items found";
                                }
                                ?>
                            </div>
                        </div>
                    </div>


            
                </div>
            </div>
        </div>

        <div class="right_container" id="right_container1" >
            <img id="exit3" class="exit" src="icons/no.png" alt="">
            <?php
            include 'connection.php';

            $sql = "SELECT * FROM `events`"; // Assuming 'events' is the name of your table
            $result = $conn->query($sql);

            if ($result && $result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
            ?>
            <div class="calendar1" id="calendar1">
                <img src="" alt="">
                <h1 id="title_eventdesc"><?php echo $row['event_name']; ?></h1>
                <h2><?php echo $row['event_date']; ?></h2>
            </div>
            <div class="calendar1" id="calendar2">
                <div class="event_description">
                    <div class="description">
                        <h1>Description</h1>
                        <p><?php echo $row['event_description']; ?></p>
                    </div>
                </div>
            </div>
            <?php
                }
            } else {
                echo "No events found";
            }
            ?>
        </div>
        
        <div class="right_container">
            <div class="calendar">
                <div class="calendar-content">
                    <h2 class="monthhead">
                        <button id="prevMonth" aria-label="Previous Month">
                            <img src="" class="arrow-icon">
                        </button>
                        <span id="currentMonth"></span>
                        <button id="nextMonth" aria-label="Next Month">
                            <img src="" alt="" class="arrow-icon">
                        </button>
                    </h2>
                    <div class="calendar-grid" >
                        <div class="weekdays"></div>
                        <div class="days" id="day"></div>
                    </div>
                </div>
                <div class="addevent" id="addevent" style="display: none;">
                    <a>ADD EVENT</a>
                </div>

                <div class="addevent" id="ToDolist" style="display: block;">
                    <a>SET TO-DO-LIST</a>
                </div>


            </div>
            
        </div>

    </div>
    <div class="addeventclick" id="addeventclick" style="display: none;" >
        <div class="addeventcontent">
            <img id="exit" src="icons/no.png" alt="">
            <div class="form_eventcon">
                <form id="event_admin" action="registration.php" method="post" >
                    <h1>Edit Event</h1>
                    <label for="photoInput"><h5>Select a photo:</label>
                    <input type="file" id="photoInput" accept="image/*">
                    <div class="date">
                        <label><h5>Event Date:</label>
                        <input type="number" autocomplete="off" name="month" id="month" min="1" max="12" placeholder="MM" oninput="limitDigits(this, 2); validateInput(this, 1, 12, 'Month');">
                        <input type="number" name="day" id="day" min="1" max="31" placeholder="DD" oninput="limitDigits(this, 2); validateInput(this, 1, 31, 'Day');">
                        <input type="number" name="year" id="year" placeholder="Year" min="2024" max="2025" oninput="limitDigits(this, 4); validateInput(this, 2024, 2025, 'Year');">

                    </div>
                    <label for="set_title"><h5>Event Name:</label>
                    <input name="set_title" id="set_title" autocomplete="off">
                    <label for="setdesc"><h5>Event Description<p class="char-count" id="char-count"></p></label>
                    
                    <div> 
                        <textarea class="setdesc" id="setdesc" rows="4" cols="50"></textarea>
                        <p class="char-count" id="char-count"></p>
                    </div>
                    <div type="submit" value="submit" id="upload">
                        <a>ADD EVENT</a>
                    </div>
                </form>

            </div>
        </div>  
    </div>
    <div class="addeventclick" id="addeventclick1" style="display: none;">
        <div class="addeventcontent" id="addeventcontent">
            <img id="exit1" class="exit" src="icons/no.png" alt="">
            <h1>To Do List</h1>
            <div class="form_eventcon">
                <form action="todo.php" method="post" >
                    <div class="date">
                        <label><h5>Date:</label>
                        <input type="number" autocomplete="off" name="month" id="month" min="1" max="12" placeholder="MM" oninput="limitDigits(this, 2); validateInput(this, 1, 12, 'Month');">
                        <input type="number" name="day" min="1" max="31" placeholder="DD" oninput="limitDigits(this, 2); validateInput(this, 1, 31, 'Day');">
                        <input type="number" name="year" id="year1" placeholder="Year" min="2024" max="2025" oninput="limitDigits(this, 4); validateInput(this, 2024, 2025, 'Year');">
 
                    </div>
                    <label for="set_title"><h5>Title:</label>
                    <input name="set_title" id="set_title" autocomplete="off">
                    <label for="setdesc"><h5>Your To-do-List here</label>
                    <div> 
                        <textarea class="setdesc" id="setdesc" name="setdesc" ></textarea>
                    </div>
                    <div type="submit" value="submit" id="upload1" class="ToDolist">
                        <button type="submit">SET TO-DO-LIST</button>
                    </div>
                </form>

            </div>

        </div>  
    </div>
    <footer class="footer"></footer>
    <script src="form.js"></script>
    <script src="settings.js"></script>
    <script src="calendar.js"></script>
    <script src="calendar2.js"></script>
    <script src="addevent.js"></script>
    <script src="clickdays.js"></script>
    <script src="https://unpkg.com/simplebar@latest/dist/simplebar.min.js"></script>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
      AOS.init();
    </script>


</body>
</html>
