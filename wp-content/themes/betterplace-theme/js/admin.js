jQuery(document).ready(function($){
   
    var mediaUploader;
    var footerlogo;
    var serviceimg;
    var serviceIconOne;
    var serviceIconTwo;
    var serviceIconThree;
    var serviceIconFour;
    var serviceIconFive;
    var serviceIconSix;
    var AboutImgIcon;
    var ServiceImgIcon;
    
    
    
    var allImageFilepath;
    // pageImgTab
    /////////////// all images /////////////////
    //$('.pageImgTab').removeClass('activeImgUpload');
    
    $(document).on('click', '.imageUpload-button', function(e){
        $('.pageImgTab').removeClass('activeImgUpload');
        $(this).parents('.pageImgTab').addClass('activeImgUpload');
        e.preventDefault();
        if(allImageFilepath){
            allImageFilepath.open();
            return;
        }
        allImageFilepath = wp.media.frames.file_frame = wp.media({
            'title': 'Choose image',
            button:{
                text:'Choose Image'
            },
            multiple: false
        });
        allImageFilepath.on('select', function(){
            attachment = allImageFilepath.state().get('selection').first().toJSON();
//            $(".activeImgUpload").find('input[type=text], img').each(function($k, $v) {
//              console.log($v);
//            });
            
            //console.log(attachment.url);
            $('.activeImgUpload .inputImgUrl').val(attachment.url);
            $('.activeImgUpload .uploadPriview_img').attr("src",attachment.url);
            $('.activeImgUpload').find('.imageRemove-button').fadeIn();
        });
        allImageFilepath.open();
    });
    
    
    
//    $('.imageUpload-button').on('click',function(e){
//        $('.pageImgTab').removeClass('activeImgUpload');
//        $(this).parents('.pageImgTab').addClass('activeImgUpload');
//        e.preventDefault();
//        if(allImageFilepath){
//            allImageFilepath.open();
//            return;
//        }
//        allImageFilepath = wp.media.frames.file_frame = wp.media({
//            'title': 'Choose image',
//            button:{
//                text:'Choose Image'
//            },
//            multiple: false
//        });
//        allImageFilepath.on('select', function(){
//            attachment = allImageFilepath.state().get('selection').first().toJSON();
//            $('.activeImgUpload .inputImgUrl').val(attachment.url);
//            $('.activeImgUpload .uploadPriview_img').attr("src",attachment.url);
//            $('.activeImgUpload').find('.imageRemove-button').fadeIn();
//        });
//        allImageFilepath.open();
//    });
    
    
    /********************* Remove Image *************************/
    
    if($(".inputImgUrl").length > 0) {
         $(".inputImgUrl").each(function() {        
             if ($(this).parents('.pageImgTab').find('.uploadPriview_img').attr('src') != '') {
             }else{
                 $(this).parents('.pageImgTab').find('.imageRemove-button').fadeOut('fast');
             }
         });
    }
    
    $('.imageRemove-button').on('click', function(){
        let attachment = "";
        $(this).parents('.pageImgTab').find('.uploadPriview_img').attr("src",'');
        $(this).parents('.pageImgTab').find('.inputImgUrl').val('');
        $(this).fadeOut();
    });

    
    
    //////////////////// compay logo /////////////////////
    $('#upload-button').on('click',function(e){
        e.preventDefault();
        if(mediaUploader){
            mediaUploader.open();
            return;
        }
        mediaUploader = wp.media.frames.file_frame = wp.media({
            'title': 'Choose image',
            button:{
                text:'Choose Image'
            },
            multiple: false
        });
        mediaUploader.on('select', function(){
            attachment = mediaUploader.state().get('selection').first().toJSON();
            $('#companylog').val(attachment.url);
            $('#company_logo_pro').attr("src",attachment.url);
        });
        mediaUploader.open();
    });
    
    ///////////////////// footer logo /////////////////////////
    $('#uploadfooter-button').on('click',function(e){
        e.preventDefault();
        if(footerlogo){
            footerlogo.open();
            return;
        }
        footerlogo = wp.media.frames.file_frame = wp.media({
            'title': 'Choose image',
            button:{
                text:'Choose Image'
            },
            multiple: false
        });
        footerlogo.on('select', function(){
            attachment = footerlogo.state().get('selection').first().toJSON();
            $('#footerlogo').val(attachment.url);
            $('#footerlogo_pro').attr("src",attachment.url);
        });
        footerlogo.open();
    });
    
    ///////////////////////// service img ////////////////////////////////////
     $('#uploadservice-button').on('click',function(e){
        e.preventDefault();
        if(serviceimg){
            serviceimg.open();
            return;
        }
        serviceimg = wp.media.frames.file_frame = wp.media({
            'title': 'Choose image',
            button:{
                text:'Choose Image'
            },
            multiple: false
        });
        serviceimg.on('select', function(){
            attachment = serviceimg.state().get('selection').first().toJSON();
            $('#serviceimg_pro').val(attachment.url);
            $('#serviceimg_pro').attr("src",attachment.url);
        });
        serviceimg.open();
    });
    
    
    ///////////////////////// about img ////////////////////////////////////
     $('#uploadabout-button').on('click',function(e){
        e.preventDefault();
        if(aboutimg){
            aboutimg.open();
            return;
        }
        aboutimg = wp.media.frames.file_frame = wp.media({
            'title': 'Choose image',
            button:{
                text:'Choose Image'
            },
            multiple: false
        });
        aboutimg.on('select', function(){
            attachment = aboutimg.state().get('selection').first().toJSON();
            $('#conpanyaboutimg').val(attachment.url);
            $('#aboutimg_pro').attr("src",attachment.url);
        });
        aboutimg.open();
    });
    
    ///////////////////////// service icon 1 ////////////////////////////////////
    $('#serviceiconOne-button').on('click',function(e){
        e.preventDefault();
        if(serviceIconOne){
            serviceIconOne.open();
            return;
        }
        serviceIconOne = wp.media.frames.file_frame = wp.media({
            'title': 'Choose image',
            button:{
                text:'Choose Image'
            },
            multiple: false
        });
        serviceIconOne.on('select', function(){
            attachment = serviceIconOne.state().get('selection').first().toJSON();
            $('#serviceOneimg').val(attachment.url);
            $('#serviceOneimg_pro').attr("src",attachment.url);
        });
        serviceIconOne.open();
    });
    
    ///////////////////////// service icon 2 ////////////////////////////////////
    $('#serviceiconTwo-button').on('click',function(e){
        e.preventDefault();
        if(serviceIconTwo){
            serviceIconTwo.open();
            return;
        }
        serviceIconTwo = wp.media.frames.file_frame = wp.media({
            'title': 'Choose image',
            button:{
                text:'Choose Image'
            },
            multiple: false
        });
        serviceIconTwo.on('select', function(){
            attachment = serviceIconTwo.state().get('selection').first().toJSON();
            $('#serviceTwoimg').val(attachment.url);
            $('#serviceTwoimg_pro').attr("src",attachment.url);
        });
        serviceIconTwo.open();
    });
    
    ///////////////////////// service icon 3 ////////////////////////////////////
    $('#serviceiconThree-button').on('click',function(e){
        e.preventDefault();
        if(serviceIconThree){
            serviceIconThree.open();
            return;
        }
        serviceIconThree = wp.media.frames.file_frame = wp.media({
            'title': 'Choose image',
            button:{
                text:'Choose Image'
            },
            multiple: false
        });
        serviceIconThree.on('select', function(){
            attachment = serviceIconThree.state().get('selection').first().toJSON();
            $('#serviceThreeimg').val(attachment.url);
            $('#serviceThreeimg_pro').attr("src",attachment.url);
        });
        serviceIconThree.open();
    });

    ///////////////////////// service icon 4 ////////////////////////////////////
    $('#serviceIconFour-button').on('click',function(e){
        e.preventDefault();
        if(serviceIconFour){
            serviceIconFour.open();
            return;
        }
        serviceIconFour = wp.media.frames.file_frame = wp.media({
            'title': 'Choose image',
            button:{
                text:'Choose Image'
            },
            multiple: false
        });
        serviceIconFour.on('select', function(){
            attachment = serviceIconFour.state().get('selection').first().toJSON();
            $('#serviceFourimg').val(attachment.url);
            $('#serviceFourimg_pro').attr("src",attachment.url);
        });
        serviceIconFour.open();
    });
    
    ///////////////////////// service icon 5 ////////////////////////////////////
    $('#serviceIconFive-button').on('click',function(e){
        e.preventDefault();
        if(serviceIconFive){
            serviceIconFive.open();
            return;
        }
        serviceIconFive = wp.media.frames.file_frame = wp.media({
            'title': 'Choose image',
            button:{
                text:'Choose Image'
            },
            multiple: false
        });
        serviceIconFive.on('select', function(){
            attachment = serviceIconFive.state().get('selection').first().toJSON();
            $('#serviceFiveimg').val(attachment.url);
            $('#serviceFiveimg_pro').attr("src",attachment.url);
        });
        serviceIconFive.open();
    }); 
    
    ///////////////////////// service icon 5 ////////////////////////////////////
    $('#serviceIconSix-button').on('click',function(e){
        e.preventDefault();
        if(serviceIconSix){
            serviceIconSix.open();
            return;
        }
        serviceIconSix = wp.media.frames.file_frame = wp.media({
            'title': 'Choose image',
            button:{
                text:'Choose Image'
            },
            multiple: false
        });
        serviceIconSix.on('select', function(){
            attachment = serviceIconSix.state().get('selection').first().toJSON();
            $('#serviceSiximg').val(attachment.url);
            $('#serviceSiximg_pro').attr("src",attachment.url);
        });
        serviceIconSix.open();
    });
    
    ///////////////////////// about icon 4 ////////////////////////////////////
    $('#about-button').on('click',function(e){
        e.preventDefault();
        if(AboutImgIcon){
            AboutImgIcon.open();
            return;
        }
        AboutImgIcon = wp.media.frames.file_frame = wp.media({
            'title': 'Choose image',
            button:{
                text:'Choose Image'
            },
            multiple: false
        });
        AboutImgIcon.on('select', function(){
            attachment = AboutImgIcon.state().get('selection').first().toJSON();
            $('#aboutimg').val(attachment.url);
            $('#aboutimg_pro').attr("src",attachment.url);
        });
        AboutImgIcon.open();
    });
    
    ///////////////////////// service icon 5 ////////////////////////////////////
    $('#serviceicon-button').on('click',function(e){
        e.preventDefault();
        if(ServiceImgIcon){
            ServiceImgIcon.open();
            return;
        }
        ServiceImgIcon = wp.media.frames.file_frame = wp.media({
            'title': 'Choose image',
            button:{
                text:'Choose Image'
            },
            multiple: false
        });
        ServiceImgIcon.on('select', function(){
            attachment = ServiceImgIcon.state().get('selection').first().toJSON();
            $('#tabone_main_img').val(attachment.url);
            $('#serviceimg_pro').attr("src",attachment.url);
        });
        ServiceImgIcon.open();
    });
    
    /**************************** link opne ********************/
    
    $('.generateLinks').on('click', function(e){
        $('.linkMenuSection > ul').removeAttr('class');
        var datatype = '';
        var data = $(this).data('type');
       $('.linkMenuSection > ul').addClass(data);
        $('.linkMenu').removeClass('displayNone');
            $('.addlink').on('click', function(e){
                var linnkname = $(this).parents('ul').attr('class');
                datatype = $(this).closest('li').find('a').attr('href');
                console.log(datatype+' '+linnkname);
                $( 'input[name$="'+linnkname+'_url"]' ).val(datatype);
                $('.linkMenu').addClass('displayNone');
            });
    });
    
    $(document).on('click','.closeButton', function(e){
        $('.linkMenu').addClass('displayNone');
    }); 
});