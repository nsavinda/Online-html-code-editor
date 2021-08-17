//Run //
function run() {
    var html = document.getElementById('editor').value
    var view = document.getElementById('view').contentWindow.document;
    view.open();
    view.write(html);
    view.close();
}

// Expand and Shrink //
var leftHold;
var rightHold;
var mobile = false;

function left() {
    rightStop();
    leftStop();
    leftHold = setInterval(leftExpand, 25);
}

function right() {
    rightStop();
    leftStop();
    rightHold = setInterval(rightExpand, 25);
}

function leftExpand() {
    var leftColWidthStr = document.getElementById('colLeft').style.width;
    var rightColWidthStr = document.getElementById('colRight').style.width;
    var leftColWidth = leftColWidthStr.replace("%", "");
    var rightColWidth = rightColWidthStr.replace("%", "");
    if (rightColWidth > 15) {
        leftColWidth++;
        rightColWidth--;
        document.getElementById('colLeft').style.width = leftColWidth + "%";
        document.getElementById('colRight').style.width = rightColWidth + "%";
    }
    viewSize();
}

function rightExpand() {
    var leftColWidthStr = document.getElementById('colLeft').style.width;
    var rightColWidthStr = document.getElementById('colRight').style.width;
    var leftColWidth = leftColWidthStr.replace("%", "");
    var rightColWidth = rightColWidthStr.replace("%", "");
    if (leftColWidth > 15) {
        leftColWidth--;
        rightColWidth++;
        document.getElementById('colLeft').style.width = leftColWidth + "%";
        document.getElementById('colRight').style.width = rightColWidth + "%";
    }
    viewSize();
}

// Stop Expanding and Shrinking //
function leftStop() {
    clearInterval(leftHold);
    clearInterval(rightHold);
}

function rightStop() {
    clearInterval(leftHold);
    clearInterval(rightHold);
}


// Mobile View //
function resize() {
    var width = window.innerWidth;
    if (width < 600) {
        if (!(mobile)) {
            document.getElementById('colLeft').style.width = "100%";
            document.getElementById('colLeft').style.display = "block";
            document.getElementById('colRight').style.display = "none";
            document.getElementById('icon-view').style.display = "block";
            document.getElementById('icon-edit').style.display = "none";
            document.getElementById('topnav-centered').style.display = "none";
            document.getElementById('icon-info').style.display = "none";
            document.getElementById('view-size').style.display = "none";
        }
        mobile = true;
    } else {
        let leftColWidth = document.getElementById('colLeft').style.width;
        if (mobile) {
            document.getElementById('colLeft').style.width = "49%";
            document.getElementById('colRight').style.width = "49%";
            document.getElementById('colRight').style.display = "block";
            document.getElementById('colLeft').style.display = "block";
            document.getElementById('icon-view').style.display = "none";
            document.getElementById('icon-edit').style.display = "none";
            document.getElementById('topnav-centered').style.display = "block";
            document.getElementById('icon-info').style.display = "block";
            document.getElementById('view-size').style.display = "block";
        }
        mobile = false;
        viewSize();
    }


}

//Mobile Change View & Editor //
function view() {
    document.getElementById('colRight').style.width = "100%";
    document.getElementById('colRight').style.display = "block";
    document.getElementById('colLeft').style.display = "none";
    document.getElementById('icon-view').style.display = "none";
    document.getElementById('icon-edit').style.display = "block";
}

function edit() {
    document.getElementById('colLeft').style.width = "100%";
    document.getElementById('colLeft').style.display = "block";
    document.getElementById('colRight').style.display = "none";
    document.getElementById('icon-edit').style.display = "none";
    document.getElementById('icon-view').style.display = "block";
}

// View Size //
function viewSize() {
    let viewFrame = document.getElementById('view');
    let viewWidth = viewFrame.contentWindow.innerWidth;
    let viewHeight = viewFrame.contentWindow.innerHeight;
    let viewSiz = document.getElementById('view-size');
    viewSiz.innerHTML = "Result Size: " + viewWidth + " X " + viewHeight;
}