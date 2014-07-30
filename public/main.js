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
            $.ajax('/unu', {
                data: data
            }).then(function(data){
                console.log(data);
            })
        }
    });
    $('.ui.dropdown').dropdown();
})();