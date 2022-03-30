function getData(a) {
    url = "https://reqres.in/api/users?page=1";
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        var value = data;
        var img1 = (value['data'][0]['avatar']);
        document.getElementById('img1').src = img1;
        var img2 = (value['data'][1]['avatar']);
        document.getElementById('img2').src = img2;
        var img3 = (value['data'][2]['avatar']);
        document.getElementById('img3').src = img3;
        var img3 = (value['data'][3]['avatar']);
        document.getElementById('img4').src = img3;
        var img3 = (value['data'][4]['avatar']);
        document.getElementById('img5').src = img3;
        var img3 = (value['data'][5]['avatar']);
        document.getElementById('img6').src = img3;
        ///// name
        var first1 = (value['data'][0]['first_name']);
        var last1 = (value['data'][0]['last_name']);
        document.getElementById('name1').innerHTML = "Name: " + first1 + " " + last1;
        var first1 = (value['data'][1]['first_name']);
        var last1 = (value['data'][1]['last_name']);
        document.getElementById('name2').innerHTML = "Name: " + first1 + " " + last1;
        var first1 = (value['data'][2]['first_name']);
        var last1 = (value['data'][2]['last_name']);
        document.getElementById('name3').innerHTML = "Name: " + first1 + " " + last1;
        var first1 = (value['data'][3]['first_name']);
        var last1 = (value['data'][3]['last_name']);
        document.getElementById('name4').innerHTML = "Name: " + first1 + " " + last1;
        var first1 = (value['data'][4]['first_name']);
        var last1 = (value['data'][4]['last_name']);
        document.getElementById('name5').innerHTML = "Name: " + first1 + " " + last1;
        var first1 = (value['data'][5]['first_name']);
        var last1 = (value['data'][5]['last_name']);
        document.getElementById('name6').innerHTML = "Name: " + first1 + " " + last1;

        var email1 = (value['data'][0]['email']);
        document.getElementById('email1').innerHTML = "Email: " + email1;
        var email2 = (value['data'][1]['email']);
        document.getElementById('email2').innerHTML = "Email: " + email2;
        var email3 = (value['data'][2]['email']);
        document.getElementById('email3').innerHTML = "Email: " + email3;
        var email3 = (value['data'][3]['email']);
        document.getElementById('email4').innerHTML = "Email: " + email3;
        var email3 = (value['data'][4]['email']);
        document.getElementById('email5').innerHTML = "Email: " + email3;
        var email3 = (value['data'][5]['email']);
        document.getElementById('email6').innerHTML = "Email: " + email3;            
    })
}
