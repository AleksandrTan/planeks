/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
        // Define changes to default configuration here. For example:
        // config.language = 'fr';
        // config.uiColor = '#AADC6E';

        config.toolbar_Default = [
                ['Source', '-', 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript'],
                '-',
                ['NumberedList','BulletedList', 'Outdent', 'Indent', 'SpecialChar', 'PageBreak'],
                '-',
                ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
                '-',
                ['Link', 'Unlink', 'Anchor', 'Image', 'Flash', 'Table', 'HorizontalRule'],
                '/',
                ['Styles', 'Format', 'Font', 'FontSize', 'TextColor', 'BGColor'],
                '-',
                ['About']
        ];

        config.toolbar_Simple = [
                ['Source', '-', 'Bold', 'Italic', 'Underline', 'Link', 'Unlink', 'Image', 'Font', 'FontSize', 'TextColor', 'About']
        ];

        config.toolbar_Emailbuilder = [
                ['Source', '-', 'Bold', 'Italic', 'Underline', 'Link', 'Unlink', 'NumberedList','BulletedList', 'Image', 'Font', 'FontSize', 'TextColor', 'About']
        ];

        config.toolbar = 'Default';
        config.allowedContent = true;
        config.extraAllowedContent = '*(*)';
        config.height = 1000;
        //config.extraPlugins = 'codemirror';
        config.codemirror = {theme: 'rubyblue'};
        config.startupShowBorders = false;
        config.enterMode = CKEDITOR.ENTER_BR;
    // since mailwizz 1.3.4.7
    config.basicEntities = false;
    config.entities = false;
    config.entities_greek = false;
    config.entities_latin = false;
    config.htmlEncodeOutput = false;
    config.entities_processNumerical = false;
    config.forceSimpleAmpersand = true;
};