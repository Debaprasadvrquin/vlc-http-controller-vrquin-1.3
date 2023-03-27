const express = require("express");
const app = express();
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
var exec = require('child_process').exec;

var m = 0;
var bri = 5;
var vlc;
const temperatures = [];

const wandhra = "/home/pi/vlc-http-controller-vrquin-1.3/videos/111.mp4"
/* LISTENING PARAMETERS */
// const length = fs.readdirSync("/videos").length
vlc = spawn('vlc', ['-I', 'rc', '--rc-fake-tty']);

var stdout_queue = new Array();
var stdouts = new Array();
var timeoutId;
vlc.stdin.on('data', (data) => {
    console.log(`VLC received:\n${data.toString()}`);
});

vlc.stdout.on("data", (chunk) => {
    if (stdout_queue.length > 0) {
        console.log("THERE IS A CB", stdout_queue[0])
        const cb = stdout_queue[0];
        stdout_queue.splice(0, 1)
        cb(chunk.toString())
    }
    console.log("CB QUEUE", stdout_queue)
    stdouts.push(chunk.toString())
    process.stdout.write("BANG" + chunk, (_err) => { });
})

vlc.stderr.on('data', (data) => {
    console.log(`VLC ERROR:\n${data.toString()}`);
});


app.get("/manifest", (req, res) => {
    res.sendFile(__dirname + '/public/json/manifest.json');
});
app.get("/vrquin-64", (req, res) => {
    res.sendFile(__dirname + '/public/images/vrquin-64.png');
});
app.get("/vrquin-128", (req, res) => {
    res.sendFile(__dirname + '/public/images/vrquin-128.png');
});
// app.get("/", (req, res) => {
//     res.sendFile(__dirname + '/vrquin.html');
// });
app.get("/map_english", (req, res) => {
    res.sendFile(__dirname + '/public/html/map_english.html');
});
app.get("/map_hindi", (req, res) => {
    res.sendFile(__dirname + '/public/html/map_hindi.html');
});
app.get("/map_odia", (req, res) => {
    res.sendFile(__dirname + '/public/html/map_odia.html');
});
app.get("/map_telugu", (req, res) => {
    res.sendFile(__dirname + '/public/html/map_telugu.html');
});
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/html/vrquin_home.html');
});
app.get("/english-tour", (req, res) => {
    res.sendFile(__dirname + '/public/html/english-tour.html');
});
app.get("/hindi-tour", (req, res) => {
    res.sendFile(__dirname + '/public/html/hindi-tour.html');
});
app.get("/odia-tour", (req, res) => {
    res.sendFile(__dirname + '/public/html/odia-tour.html');
});
app.get("/telugu-tour", (req, res) => {
    res.sendFile(__dirname + '/public/html/telugu-tour.html');
});
app.get("/vrquin_home1", (req, res) => {
    res.sendFile(__dirname + '/public/html/vrquin_home1.html');
});
app.get("/rc", (req, res) => {
    res.sendFile(__dirname + '/rc.html');
});
app.get("/e-visakhapatnam", (req, res) => {
    res.sendFile(__dirname + '/public/html/e-visakhapatnam.html');
});
app.get("/h-visakhapatnam", (req, res) => {
    res.sendFile(__dirname + '/public/html/h-visakhapatnam.html');
});
app.get("/o-visakhapatnam", (req, res) => {
    res.sendFile(__dirname + '/public/html/o-visakhapatnam.html');
});
app.get("/t-visakhapatnam", (req, res) => {
    res.sendFile(__dirname + '/public/html/t-visakhapatnam.html');
});
async function findMedia(id) {
    return new Promise((resolve, reject) => {
        const found = media.filter((v) => {
            return (v.id == id);
        })
        console.log("FOUND", found)
        if (found.length == 1) {
            resolve(found[0])
        } else {
            reject("TOO FEW OR TOO MANY!")
        }
    })
}

vlc.stdin.write('add ' + wandhra + '\n')
vlc.stdin.write("loop\n")
app.post("/wlandhrae", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/111.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/wlandhrah", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/111.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/wlandhrat", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/111.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/wlandhrao", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/111.mp4" + '\n')
    res.send({ status: "OK" })
});

app.post("/lhindi", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/111.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/lenglish", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/113.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/ltelugu", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/115.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/lodia", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/116.mp4" + '\n')
    res.send({ status: "OK" })
});

app.post("/map_e_vizia", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/115.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/map_e_visak", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/116.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/map_e_westg", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/111.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/map_e_guntu", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/113.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/map_e_kurno", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/115.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/map_e_anant", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/116.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/map_e_srika", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/113.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/map_e_eastg", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/111.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/map_e_krish", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/115.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/map_e_praka", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/116.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/map_e_nello", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/113.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/map_e_ysr", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/115.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/map_e_chitt", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/116.mp4" + '\n')
    res.send({ status: "OK" })
});

app.post("/v_c_p_1", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/111.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/v_c_p_2", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/113.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/v_c_p_3", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/115.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/v_c_p_4", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/116.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/v_c_p_5", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/111.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/v_c_p_6", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/113.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/v_c_p_7", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/115.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/v_c_p_8", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/116.mp4" + '\n')
    res.send({ status: "OK" })
});

app.post("/v_u_p_1", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/115.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/v_u_p_2", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/116.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/v_u_p_3", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/111.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/v_u_p_4", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/113.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/v_u_p_5", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/115.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/v_u_p_6", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/116.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/v_u_p_7", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/115.mp4" + '\n')
    res.send({ status: "OK" })
});
app.post("/v_u_p_8", (req, res) => {
    vlc.stdin.write("clear\n");
    vlc.stdin.write('add ' + "/home/pi/vlc-http-controller-vrquin-1.3/videos/113.mp4" + '\n')
    res.send({ status: "OK" })
});

app.post("/seek", async (req, res) => {
    const { time } = req.body;
    console.log("SEEK", time)
    if (time) {
        vlc.stdin.write('seek ' + time + '\n')
        res.send({ status: "OK" })
    }
});
app.post("/enqueue", async (req, res) => {
    const { fileid } = req.body;
    console.log("ADD")
    findMedia(fileid).then((file) => {
        vlc.stdin.write('enqueue ' + file['src'] + '\n')
        res.send({ status: "OK" })
    })
});
app.post("/reboot", (req, res) => {
    function shutdown(callback) {
        exec('sudo reboot', function (error, stdout, stderr) { callback(stdout); });
    }
    shutdown(function (output) {
        console.log(output);
    });
    res.send({ status: "OK" })
});
app.post("/shutdown", (req, res) => {
    function shutdown(callback) {
        exec('sudo poweroff', function (error, stdout, stderr) { callback(stdout); });
    }
    shutdown(function (output) {
        console.log(output);
    });
    res.send({ status: "OK" })
});

function handleCurrenttime(data) {
    console.log("Handletime called: ", data);
    const parts = data.split("\r\n")
    parameters["currenttime"] = parts[0];
}

function handlePlaylist(data) {
    console.log("Handleplaylist called: ")
    const parts = data.split("\r\n")
    parameters["playlist"] = parts;
}

function handleCurrentlength(data) {
    console.log("HandleCurrentlength called: ", data)
    //parameters["currentlength"] = data;
    const parts = data.split("\r\n")
    parameters["currentlength"] = parts[0];
}

async function awaitParameter(param) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (parameters[param] != null) {
                resolve(parameters[param])
            } else {
                reject("TIMEOUT on await " + param)
            }
        }, 100)
    })
}

app.post("/gettime", async (req, res) => {
    parameters["currenttime"] = null;
    stdout_queue.push(handleCurrenttime);
    vlc.stdin.write("get_time\n")
    const value = await awaitParameter("currenttime")
        .then((data) => {
            res.send({ status: "OK", data })
        })
})

app.post("/getplaylist", async (req, res) => {
    parameters["playlist"] = null;
    stdout_queue.push(handlePlaylist);
    vlc.stdin.write("playlist\n")
    const value = await awaitParameter("playlist")
        .then((data) => {
            res.send({ status: "OK", data })
        })
})

async function updateParameter(vlccmd, paramname, cb) {
    return new Promise(async (resolve, reject) => {
        parameters[paramname] = null;
        stdout_queue.push(cb);
        vlc.stdin.write(vlccmd + "\n")
        await awaitParameter(paramname).then(async (data) => {
            resolve(data)
        })
    })
}

app.post("/gettimeline", async (req, res) => {
    updateParameter("get_time", "currenttime", handleCurrenttime)
        .then(() => {
            updateParameter("get_length", "currentlength", handleCurrentlength)
                .then(() => {
                    res.send({ status: "OK", parameters })
                })
        })
})

app.post("/info", async (req, res) => {
    parameters["currentlength"] = null;
    parameters["currenttime"] = null;

    stdout_queue.push(handleCurrenttime);
    vlc.stdin.write("get_time\n")

    stdout_queue.push(handleCurrentlength);
    vlc.stdin.write("get_length\n")

    Promise.all([awaitParameter("currenttime"), awaitParameter("currentlength")])
        .then((data) => {
            res.send({ status: "OK", parameters })
        })
})

app.post("/getlength", async (req, res) => {
    parameters["currentlength"] = null;
    stdout_queue.push(handleCurrentlength);
    vlc.stdin.write("get_length\n")
    const value = await awaitParameter("currentlength")
        .then((data) => {
            res.send({ status: "OK", data })
        })
})


app.post("/help", (req, res) => {
    const test = vlc.stdin.write("help\n")
    res.send({ status: "OK" })
})

app.listen(8000, () => {
    console.log("Listen on the port 8000...");
});
