function budgetSet() {
    let budgetValue = +document.getElementById("setBudget").value;
    document.getElementById("spaceOfTb").innerText = budgetValue;
}
function expenseSet() {
    var expenseValue1 = document.getElementById("expCategory").value;
    var expenseValue2 = document.getElementById("expDate").value;
    var expenseValue3 = document.getElementById("expDescription").value;
    var expenseValue4 = +document.getElementById("expAmount").value;
    let expArray = [
        expenseValue1,
        expenseValue2,
        expenseValue3,
        expenseValue4,
    ];
    let totalBudget = +document.getElementById("setBudget").value;
    let totalExpense = +(document.getElementById("spaceOfTe").innerText =
        expArray[3]);
    let reambgt = totalBudget - totalExpense;
    document.getElementById("spaceOfRb").innerText = reambgt;

    document.getElementById("expvalue1").innerHTML =
        "<tr>" + expenseValue1 + "</tr>";
    document.getElementById("expvalue2").innerHTML =
        "<tr>" + expenseValue2 + "</tr>";
    document.getElementById("expvalue3").innerHTML =
        "<tr>" + expenseValue3 + "</tr>";
    document.getElementById("expvalue4").innerHTML =
        "<tr>" + expenseValue4 + "</tr>";
}


function cancelButton() {
    var expenseValue1 = document.getElementById("expCategory").value;
    var expenseValue2 = document.getElementById("expDate").value;
    var expenseValue3 = document.getElementById("expDescription").value;
    var expenseValue4 = +document.getElementById("expAmount").value;
    let expArray = [
        expenseValue1,
        expenseValue2,
        expenseValue3,
        expenseValue4,
    ];
    const a = expArray.slice(0, 0);
    document.getElementById("expvalue1").innerHTML =
        "<tr>" + a + "</tr>";
    document.getElementById("expvalue2").innerHTML =
        "<tr>" + a + "</tr>";
    document.getElementById("expvalue3").innerHTML =
        "<tr>" + a + "</tr>";
    document.getElementById("expvalue4").innerHTML =
        "<tr>" + a + "</tr>";
    +(document.getElementById("spaceOfTe").innerText = 0);
    document.getElementById("spaceOfRb").innerText = 0;
}