class Product {
    constructor() {
        // this.printproduct = document.getElementById("showproduct");
        this.storage = ['Apple Iphone 11 Pro', 'Samsung Galaxy Note 10', 'Xiaomi Mi Note 10', 'Samsung Galaxy S11', 'Apple Iphone 11'];
    }
    count(num) {
        let show = document.getElementById("counter");
        if (num) {
            if (num > 1) show.innerHTML = num + " Products"
            else show.innerHTML = num + " Product"
        }
        else {
            show.innerHTML = "No Product"
        }
    }
    ShowProduct() {
        let show = document.getElementById("showproduct");
        let tb = '';
        if (this.storage.length > 0) {
            for (let i in this.storage) {
                tb += `<tr class='pro${i % 2}'>`;
                tb += `<td class='hello' id=${i}>${this.storage[i]}</td>`;
                tb += `<td><input type="button" value="Edit" onclick="app.Edit('${i}')"></td>`;
                tb += `<td><input type="button"  id='edit${i}' value="Delete" onclick="app.Delete('${i}')"></td>`;
                tb += "</tr>"
            }
        }
        this.count(this.storage.length);
        show.innerHTML = tb;
    }
    Add(input) {
        let add = document.getElementById(input);
        let product = add.value.trim();
        if (product) {
            this.storage.push(product);
            add.value = '';
            this.ShowProduct();
        }
    }
    Delete(i) {
        this.storage.splice(i, 1);
        this.ShowProduct();
    }
    Edit(i) {
        let edit = document.getElementById(i);
        let a = parseInt(i);
        edit.contentEditable = true;
        edit.textContent = this.storage[a];
        let submit = document.getElementById(`edit${i}`);
        submit.value = 'Submit';
        let app = this;
        submit.onclick = function () {
            let product = edit.textContent.trim();
            if (product) {
                app.storage.splice(a, 1, product);
                app.ShowProduct();
                submit.value = "Delete"
                submit.onclick = `app.Delete('${i}')`;
                edit.contentEditable = false;
            }
            else {
                edit.textContent += "Chưa Nhập sản phẩm Bấm lại";
                edit.textContent = app.storage[a];
            }
        }
    }
}
let app = new Product();
app.ShowProduct();