 
let arrListCustomer=[];
let arrInforCustomer=[];
function displayMainMenu(){
    let choose=parseInt(prompt('Nhập số tương ứng chức năng bạn muốn thực hiện:'+
    '\n1. Add New Customer'+
    '\n2. Display Information Customer'+
    '\n3. Edit Information Customer'+
    '\n4. Delete Customer'+
    '\n5. Exit'));
    switch(choose){
        case 1:{
            addNewCustomer();
        };
        break;
        case 2:{
            displayCustomer();
        };
        break;
        case 3:{
            editInforCustomer();
        };
        break;
        case 4:{
            deleteCustomer();
        };
        break;
        case 5:{

        };
        break;
        default:{
            alert('Hãy nhập số tương ứng');            
        }
    }
}
function addNewCustomer(){   
    arrInforCustomer=[]; 
    let name=prompt("Enter Full Name");
    let idCard=prompt("Enter ID Card");
    let birthDay=prompt("Enter BirthDay");
    let email=prompt("Enter Email");
    let address=prompt("Enter Address");
    let typeCustomer=prompt("Enter Type Customer: Diamond, Platinum, Gold, Silver, Member");
    let discout=prompt("Enter Discout");
    let numberCustomer=prompt("Enter Number Customer");
    let rentdays=prompt("Enter Rentdays");
    let service=prompt("Enter Service: Villa, House, Room");
    let typeRoom=prompt("Enter Type Room: Vip, Business, Normal");
    arrInforCustomer.push(name);
    arrInforCustomer.push(idCard);
    arrInforCustomer.push(birthDay);
    arrInforCustomer.push(email);
    arrInforCustomer.push(address);
    arrInforCustomer.push(typeCustomer);
    arrInforCustomer.push(discout);
    arrInforCustomer.push(numberCustomer);
    arrInforCustomer.push(rentdays);
    arrInforCustomer.push(service);
    arrInforCustomer.push(typeRoom);
    arrListCustomer.push(arrInforCustomer);
    displayMainMenu();
}
function displayCustomer(){
    let temp='';
    for(let i=0;i<arrListCustomer.length;i++){
        temp+=(i)+' .name= '+arrListCustomer[i][0]+'\n';
    }    
    let chooseNum=parseInt(prompt(temp));
    alert('Tên:'+arrListCustomer[chooseNum][0]+'\n'+
    'CMND:'+arrListCustomer[chooseNum][1]+'\n'+
    'Sinh nhật:'+arrListCustomer[chooseNum][2]+'\n'+
    'Email:'+arrListCustomer[chooseNum][3]+'\n'+
    'Địa chỉ:'+arrListCustomer[chooseNum][4]+'\n'+
    'Loại khách hàng:'+arrListCustomer[chooseNum][5]+'\n'+
    'Giảm giá:'+arrListCustomer[chooseNum][6]+'\n'+
    'Số khách hàng:'+arrListCustomer[chooseNum][7]+'\n'+
    'Số ngày thuê:'+arrListCustomer[chooseNum][8]+'\n'+
    'Dịch vụ:'+arrListCustomer[chooseNum][9]+'\n'+
    'Loại phòng:'+arrListCustomer[chooseNum][10]);
    displayMainMenu();    
}
function editInforCustomer(){
    let temp='';
    for(let i=0;i<arrListCustomer.length;i++){
        temp+=(i)+' .name= '+arrListCustomer[i][0]+'\n';
    }    
    let chooseNum=parseInt(prompt(temp));
    let chooseEdit=parseInt(prompt('1. Tên:'+arrListCustomer[chooseNum][0]+'\n'+
    '2. CMND:'+arrListCustomer[chooseNum][1]+'\n'+
    '3. Sinh nhật:'+arrListCustomer[chooseNum][2]+'\n'+
    '4. Email:'+arrListCustomer[chooseNum][3]+'\n'+
    '5. Địa chỉ:'+arrListCustomer[chooseNum][4]+'\n'+
    '6. Loại khách hàng:'+arrListCustomer[chooseNum][5]+'\n'+
    '7. Giảm giá:'+arrListCustomer[chooseNum][6]+'\n'+
    '8. Số khách hàng:'+arrListCustomer[chooseNum][7]+'\n'+
    '9. Số ngày thuê:'+arrListCustomer[chooseNum][8]+'\n'+
    '10. Dịch vụ:'+arrListCustomer[chooseNum][9]+'\n'+
    '11. Loại phòng:'+arrListCustomer[chooseNum][10]));
    switch(chooseEdit){
        case 1:{
            arrListCustomer[chooseNum][0]=prompt('Đổi tên');
        }
        break;
        case 2:{
            arrListCustomer[chooseNum][1]=prompt('Đổi cmnd');
        }
        break
        case 3:{
            arrListCustomer[chooseNum][2]=prompt('Đổi sinh nhật');
        }
        break;
        case 4:{
            arrListCustomer[chooseNum][3]=prompt('Đổi Email');
        }
        break;
        case 5:{
            arrListCustomer[chooseNum][4]=prompt('Đổi Địa Chỉ');
        }
        break;
        case 6:{
            arrListCustomer[chooseNum][5]=prompt('Đổi loại khách hàng');
        }
        break;
        case 7:{
            arrListCustomer[chooseNum][6]=prompt('Đổi giảm giá');
        }
        break;
        case 8:{
            arrListCustomer[chooseNum][7]=prompt('Đổi số khách hàng');
        }
        break;
        case 9:{
            arrListCustomer[chooseNum][8]=prompt('Đổi số ngày thuê');
        }
        break;
        case 10:{
            arrListCustomer[chooseNum][9]=prompt('Đổi loại dịch vụ');
        }
        break;
        case 11:{
            arrListCustomer[chooseNum][10]=prompt('Đổi loại phòng');
        }
        break;
    }
    alert('Tên:'+arrListCustomer[chooseNum][0]+'\n'+
    'CMND:'+arrListCustomer[chooseNum][1]+'\n'+
    'Sinh nhật:'+arrListCustomer[chooseNum][2]+'\n'+
    'Email:'+arrListCustomer[chooseNum][3]+'\n'+
    'Địa chỉ:'+arrListCustomer[chooseNum][4]+'\n'+
    'Loại khách hàng:'+arrListCustomer[chooseNum][5]+'\n'+
    'Giảm giá:'+arrListCustomer[chooseNum][6]+'\n'+
    'Số khách hàng:'+arrListCustomer[chooseNum][7]+'\n'+
    'Số ngày thuê:'+arrListCustomer[chooseNum][8]+'\n'+
    'Dịch vụ:'+arrListCustomer[chooseNum][9]+'\n'+
    'Loại phòng:'+arrListCustomer[chooseNum][10]);
    displayMainMenu();
}
function deleteCustomer(){
    let temp='';
    for(let i=0;i<arrListCustomer.length;i++){
        temp+=(i)+' .name= '+arrListCustomer[i][0]+'\n';
    }    
    let chooseNum=parseInt(prompt(temp));
    for(let j=chooseNum;j<arrListCustomer.length;j++){
        arrListCustomer[j]=arrListCustomer[j+1];
    }
    arrListCustomer.pop();
    temp='';
    for(let i=0;i<arrListCustomer.length;i++){
        temp+=(i)+' .name= '+arrListCustomer[i][0]+'\n';}
    alert(temp);
    displayMainMenu();  
    
}
function exitMenu(){
    break;
}
displayMainMenu();