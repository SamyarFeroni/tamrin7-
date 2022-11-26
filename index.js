
let result = [
    {
        uid: 1,
        firstName: 'Ali',
        lastName: 'Mahdavi',
        position: 'Back-End Develope',
        city: 'Taleqan'
    },
    {
        uid: 2,
        firstName: 'Reza',
        lastName: 'Shahmardan',
        position: 'Front-End Developer',
        city: 'Behbahan'
    },
    {
        uid: 3,
        firstName: 'Hassan',
        lastName: 'Qolami',
        position: 'UI Designer',
        city: 'Biarjmand'
    },
    {
        uid: 4,
        firstName: 'Morteza',
        lastName: 'Hamedani',
        position: 'Devops',
        city: 'Shiraz'
    }, {
        uid: 5,
        firstName: 'Sina',
        lastName: 'Hejazi',
        position: 'Product Manager',
        city: 'Hamedan'
    },
    {
        uid: 6,
        firstName: 'Ahmad',
        lastName: 'Hameda',
        position: 'Devop',
        city: 'Shiraz'
    }
];
// CREATE TABALE
function read() {
    document.getElementById("make").innerHTML = null;
    let tb = '<tbody>'
    for (let i = 0; i < result.length; i++) {
        let num = i + 1
        tb += '<tr bgcolor = "gray" id="tabaleRow" onclick="editRow(event)";>';
        tb += '<td>' + num + '</td>';
        tb += '<td>' + result[i].uid + '</td>'
        tb += '<td>' + result[i].firstName + '</td>';
        tb += '<td>' + result[i].lastName + '</td>';
        tb += '<td>' + result[i].position + '</td>';
        tb += '<td>' + result[i].city + '</td>';
        tb += '</tr>';
    }
    tb += '</tbody>';
    document.getElementById("make").innerHTML = tb;
}
read()

// ADD TO TABLE
function creat(uid, fName, lname, position, city) {
    let findByUid = result.find((item) => item.uid == uid);
    if (findByUid) return alert("duplicate value");
    result.push({ uid, firstName: fName, lastName: lname, position, city });
};

//UPDATE TABLE
function update(uid) {
    let findByUid = result.find((item) => item.uid == uid);
    console.log(findByUid)
    if (findByUid)// return alert("duplicate value");
   result = result.map((item) => (item.uid !== uid.uid ? item : uid));
};
// // DELETE FROM TABLE
function deleteObj(uid) {
    for (let i = 0; i < result.length; i++) {
        if (result[i].uid == uid) {
            result.splice(i, 1);
            document.getElementById("make").deleteRow(uid-1)
            read()
            
        }
    }
};
var rIndex,table = document.getElementById("table");
function addRow() {
    let uid = document.getElementById("uid").value,
     fName = document.getElementById("fname").value,
     lname = document.getElementById("lname").value,
     position = document.getElementById("position").value,
     city = document.getElementById("city").value;
     creat(uid, fName, lname, position, city)
    read()
};

function editRow(e) {
     console.log(e.target.innerText);
     console.log(e.target.parentNode.innerText);
    let data = e.target.parentNode.innerText.split('\t');
    //data = data.split('\t');
    let uid = data[1],
     fName = data[2],
     lname = data[3],
     position = data[4],
     city = data[5];
    let uidE = document.getElementById("uid").value = uid;
   let fnameE =  document.getElementById("fname").value = fName;
   let lnameE =  document.getElementById("lname").value = lname;
   let positionE  = document.getElementById("position").value = position;
    let cityE = document.getElementById("city").value = city;
    update(uidE,fnameE,lnameE,positionE,cityE)
    console.log({ uid, fName, lname, position, city });
    
}
function remove(){
    let UIDE = document.getElementById("uidE").value;
    deleteObj(UIDE)


}
