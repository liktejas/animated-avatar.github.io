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