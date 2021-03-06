/*
 * File: app/view/FormErrorState.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Sencha.view.FormErrorState', {
    extend: 'Ext.Component',
    alias: 'widget.formErrorState',

    validText: 'Form is valid',
    invalidText: 'Form has errors',
    baseCls: 'form-error-state',

    initComponent: function() {
        var me = this;

        me.callParent(arguments);
    },

    getTip: function() {
        var tip = this.tip;
        if (!tip) {
            tip = this.tip = Ext.widget('tooltip', {
                target: this.el,
                title: 'Error Details:',
                autoHide: false,
                anchor: 'top',
                mouseOffset: [-11, -2],
                closable: true,
                constrainPosition: false,
                cls: 'errors-tip'
            });
            tip.show();
        }
        return tip;
    },

    setErrors: function(errors) {
        var me = this,
        baseCls = me.baseCls,
        tip = me.getTip();

        var tipTpl = Ext.create('Ext.XTemplate', 
        [
        '<ul><tpl for=".">',
        '<li><span class="field-name">{name}</span>: ',
        '<span class="error">{error}</span></li>',
        '</tpl></ul>'
        ]);

        errors = Ext.Array.from(errors);

        // Update CSS class and tooltip content
        if (errors.length) {
            me.addCls(baseCls + '-invalid');
            me.removeCls(baseCls + '-valid');
            me.update(me.invalidText);
            tip.setDisabled(false);
            tip.update(tipTpl.apply(errors));
        } else {
            me.addCls(baseCls + '-valid');
            me.removeCls(baseCls + '-invalid');
            me.update(me.validText);
            tip.setDisabled(true);
            tip.hide();
        }
    }

});