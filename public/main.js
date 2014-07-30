/**
 * Created by mdemo on 2014/7/29.
 */
(function(){
    var formRules = {
        url: {
            identifier: 'url',
            rules: [
                {
                    type: 'url',
                    prompt: 'please enter your url'
                }
            ]
        }
    };
    $('#result').hide();
    $('.ui.form').form(formRules,{
        on: 'blur',
        inline:true,
        onSuccess:function(e){
            e.preventDefault();
            var data = {
                url:$('#url').val(),
                options:{
                    userAgent:$('#userAgent').dropdown('get text')
                }
            };
            $('#result').hide();
            $.ajax('/unu', {
                data: data
            }).then(function(css){
                $('#result').show();
                $('#css-unused-length').text('('+css.unused.length+')');
                $('#css-used-length').text('('+css.used.length+')');
                $.each(css.unused,function(key,value){
                    var li = $('<li class="item">').text(value);
                    $('#css-unused').append(li);
                });
                $.each(css.used,function(key,value){
                    var li = $('<li class="item">').text(value);
                    $('#css-used').append(li);
                });

            },function(error){
                alert(error);
            });
        }
    });
    $('.ui.dropdown').dropdown();
    $('.ui.accordion').accordion();
})();