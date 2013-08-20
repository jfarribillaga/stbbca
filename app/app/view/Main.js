Ext.define('StBahia.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Button'
    ],
    config: {

        items: [
            {
                xtype: 'container',
                itemId: "holatext",
                html: "Hola !!",
                style: {
                    "text-align": "center",
                    "margin-botton": "10px"
                }
            },
            {
                xtype: 'button',
                text: 'My button',
                action: 'gotest'
            }
        ]
        
    }
});
