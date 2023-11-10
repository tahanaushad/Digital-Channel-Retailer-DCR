$.ajax({
    "url": "../JSON/sidebar.json",
    type: "GET",
    success: function (resp) {
        let tempMenu = ``;
        for (var i = 0; i < resp.length; i++) {
            if (!resp[i].hasChildren && resp[i].parentID == "") {
                tempMenu += `
            <li class="sidebar-item">
                <a href="${resp[i].url}" class="sidebar-link"><i class="${resp[i].icon} pe-2"></i>
                ${resp[i].name}
                </a>
            </li>`;
            } else if (resp[i].hasChildren && resp[i].parentID == "") {
                tempMenu += `
            <li class="sidebar-item">
            <a href="${resp[i].url}" class="sidebar-link collapsed" data-bs-toggle="collapse" data-bs-target="#pages-${resp[i].ID}"
            aria-expanded="false" aria-controls="pages-${resp[i].ID}">
            <i class="${resp[i].icon} pe-2""></i>
            ${resp[i].name}
            </a>
            <ul id="pages-${resp[i].ID}" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">`;
                for (let index = 0; index < resp.length; index++) {
                    // console.log(index);
                    if (!resp[index].hasChildren && resp[index].parentID == resp[i].ID) {
                        tempMenu += `
                        <li class="sidebar-item nest-item">
                        <a href="${resp[index].url}" class="sidebar-link">${resp[index].name}</a>
                        </li>`;
                    }

                }
                tempMenu += `</ul></li>`;
            }
        }
        $('#sideBarMenus').html(tempMenu);
    }
})




const toggler = document.querySelector(".btn");
toggler.addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("collapsed");
});


$(window).on('resize', function (e) {
    var windowWidth = $(window).width();

    if (windowWidth < 560) {
        document.querySelector("#sidebar").classList.toggle("collapsed");
    }
});


// Fold/Unfold

$(document).ready(function () {
    $('#toggleButton').click(function () {
        var inputContainer = $('#inputContainer');
        var button = $('#toggleButton');

        if (inputContainer.hasClass('unfolded')) {
            inputContainer.removeClass('unfolded').addClass('folded');
            // button.find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
            button.text('V Unfold');
        } else {
            inputContainer.removeClass('folded').addClass('unfolded');
            // button.find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
            button.text('Ʌ Fold');
        }
    });
});