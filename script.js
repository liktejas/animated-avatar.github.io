const getValues = () =>{
    let name = document.getElementById('name').value;
    let getGenderChecked = document.querySelector('input[name="gender"]:checked');
    if(name == ''){
        alert('Please Enter Name');
    }
    if(getGenderChecked == null){
        alert('Please Select Gender');
    }
    if(name != '' && getGenderChecked != null){
        let gender = document.querySelector('input[name="gender"]:checked').value;
        document.getElementsByTagName('img')[0].setAttribute('src',`https://joeschmoe.io/api/v1/${gender}/${name}`);
    }
}


if('serviceWorker' in navigator)
{
    window.addEventListener('load', function(){
    navigator.serviceWorker.register('/sw.js').then(function(registration){
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err){
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
    });
    });
}