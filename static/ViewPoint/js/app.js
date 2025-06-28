// JavaScript to handle mouseover and mouseout events
var activeMethodPill = null;
var activeScenePill = null;
var activeModePill = null;
var activeVidID = 0;
var select = false;


$(document).ready(function () {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    activeMethodPill = $('.method-pill').filter('.active')[0];
    activeModePill = $('.mode-pill').filter('.active')[0];
    activeScenePill = $('.scene-pill').filter('.active')[0];
});

function selectCompVideo(methodPill, scenePill, n_views, modePill) {
    // Your existing logic for video selection
    // var video = document.getElementById("compVideo");
    select = true;

    if (activeMethodPill) {
        activeMethodPill.classList.remove("active");
    }

    if (activeScenePill) {
        activeScenePill.classList.remove("active");
    }

    if (modePill) {
        activeModePill.classList.remove("active");
        modePill.classList.add("active");
        activeModePill = modePill;
    }

    activeMethodPill = methodPill;
    activeScenePill = scenePill;
    scenePill.classList.add("active");
    pill = scenePill.getAttribute("data-value");
    mode = activeModePill.getAttribute("data-value");

    promptTextBox = $('#prompt-box');

    switch (pill) {
        case 'moon':
            promptTextBox.text("The video shows the astronauts strolling slowly on the desolate surface of the moon.");
            break;
        case 'cliff':
            promptTextBox.text("A panoramic view of an island in the sea, covered with green grass, with waves crashing against the island. The sky is blue, adorned with white clouds.");
            break;
        case 'hometown':
            promptTextBox.text("The scenery by the lake, with swaying leaves, calm water surface, swaying flowers, and dreamlike fairy tale scenes.");
            break;
        case 'roadway':
            promptTextBox.text("A city street with multiple cars driving down the road.");
            break;
        case 'room':
            promptTextBox.text("A large living room with various furniture.");
            break;
        case 'scene':
            promptTextBox.text("Standing atop a majestic mountain, overlooking an expansive panorama where nature's beauty is infused with elements of surreal magic.");
            break;
        case 'sea':
            promptTextBox.text("On the evening coast, the sunset shines brightly.");
            break;
        case 'ship':
            promptTextBox.text("At night, a small boat in the center of the ocean is surrounded by clouds and waves, and glowing lights emanate from above, creating a mysterious atmosphere that showcases the vastness of water and sky. ");
            break;
        case 'b2':
            promptTextBox.text("An aerial scene of dark cloud layers, with an airplane traversing the sky, amid thunder and lightning, an apocalyptic scenario, surrealism.");
            break;
        case 'snowtown':
            promptTextBox.text("The snow covered winter in the villages of the north, the thick snow in the morning, and the fairy tale like world of cooking smoke.");
            break;
        case 'snowmountain':
            promptTextBox.text("The video showcases a stunning mountain view from a high altitude, with the camera focusing on a distant snow capped mountain.");
            break;
        case 'spring':
            promptTextBox.text("The video shows a peaceful natural scenery without disturbance on a sunny day.");
            break;
        case 'sunrise':
            promptTextBox.text("Two hunters of 16 century in furs are standing on a high slope opposite a large snowy valley.");
            break;
        case 'supernova':
            promptTextBox.text("A magical forest bathed in the deep colors of night, where lush, green trees stretch towards the starry sky, their leaves whispering gently in the cool night breeze.");
            break;
        case 'surf':
            promptTextBox.text("A man is surfing on a lake.");
            break;
        case 'vangogh':
            promptTextBox.text("VanGogh's oil paintings style, depicting a a street in a tranquil small town. The sky is blue.");
            break;
        case 'text':
            promptTextBox.text("A scenic view of a river and a forest.");
            break;
        // case 'l15':
        //     promptTextBox.text("A tranquil mountain lake, crystal clear reflections, majestic mountains, blue sky, black and white photo");
        //     break;
        // case 'v1':
        //     promptTextBox.text("Rural English countryside, tree, farmhouse, oil painting");
        //     break;


        // default:
        //     promptTextBox.text("Missing prompt...");
        //     break;
    }
    // promptTextBox.text("Loading...");

    // console.log("Pill: " + pill + " Mode: " + mode);

    // if (videoSwitch.checked) {
    //     mode = 'depth'
    // } else {
    //     mode = 'rgb'
    // }

    // swap video to avoid flickering

    var video_active_source = document.querySelector("#compVideo" + activeVidID + " source");
    var video_hidden_source = document.querySelector("#compVideo" + (1 - activeVidID) + " source");
    

    console.log("[info]", video_active_source); 

    video_active_source.dataset.src = "static/ViewPoint/videos/" + mode + "/" + pill + ".mp4";
    // video_active_source.dataset.vrsrc = video_active_source.dataset.src;
    video_active_source.src = "static/ViewPoint/videos/" + mode + "/" + pill + ".mp4";

    // var video_active = document.getElementById("compVideo" + activeVidID);
    video_active_source.setAttribute('src', video_active_source.getAttribute('data-src'));
    const videoElement = document.querySelector('#compVideo'+ activeVidID);


    videoElement.src = "static/ViewPoint/videos/" + mode + "/" + pill + ".mp4";


    videoElement.load(); // 强制重新加载视频
    videoElement.play();

    console.log("[info videoElement]", videoElement); 

}

function activateTeaserVid() {
    var video = document.getElementById("teaserVideo");
    video.src = "videos/teaser.mp4";
    video.load();
}