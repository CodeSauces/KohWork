
var AssessoriesFunction = function () {
    var tabsClick = function (event, $that) {
        var thatElement = $($that);
        var Container = thatElement.find('[href]').attr('href');
        Container.toggle('hide');
    }
    return {
        handleTabsClick: function (event, $that) {
            tabsClick(event, $that)
        }
    }
}();

$(document).ready(function () {
    $.fn.datepicker.dates['en'] = {
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        months: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov",
            "Dec"
        ],
        today: "Today",
        clear: "Clear",
        format: "yyyy-mm-dd",
        titleFormat: "yyyy-MM",
        /* Leverages same syntax as 'format' */
        weekStart: 0
    };
    $('.datepicker').datepicker({
        language: "en",
    });
    $('.datepicker').datepicker()
        .on('show', function (e) {
            $('.datepicker-days .next,.datepicker-days .prev').html('');
            var prev = $('.datepicker-days .prev');
            prev.attr('colspan', 2);
            prev.next().attr('colspan', 3);
            $('.form-control.datepicker').addClass('datepicker-open')
        });
    $('.datepicker').datepicker()
        .on('hide', function (e) {
            $('.form-control.datepicker').removeClass('datepicker-open')
    });
    $('table td .grid-checkbox input').click(function(){
        var $that = $(this);
        if($that.is(':checked')){
        $that.parents('tr').addClass('active');
        }else{
        $that.parents('tr').removeClass('active');
        }
        
        });
})