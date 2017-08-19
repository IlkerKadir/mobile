/**
 * mSupply Mobile
 * Sustainable Solutions (NZ) Ltd. 2016
 */

import LocalizedStrings from 'react-native-localization';
/* eslint-disable max-len */
export const modalStrings = new LocalizedStrings({
  gb: {
    add_at_least_one_item_before_finalising: 'You need to add at least one item before finalising',
    and: 'and',
    cancel: 'Cancel',
    confirm: 'Confirm',
    create: 'Create',
    delete_these_invoices: 'Are you sure you want to delete these invoices?',
    delete_these_requisitions: 'Are you sure you want to delete these requisitions?',
    delete_these_stocktakes: 'Are you sure you want to delete these stocktakes?',
    delete: 'Delete',
    edit_the_invoice_comment: 'Edit the invoice comment',
    edit_the_requisition_comment: 'Edit the requisition comment',
    edit_their_reference: 'Edit their reference',
    finalise_customer_invoice: 'Finalise will lock this invoice permanently.',
    finalise_supplier_requisition: 'Finalise will send this requisition and lock it permanently.',
    finalise_customer_requisition: 'Finalise will generate a finalised customer invoice, adjust inventory, and lock this requisition permanently.',
    finalise_stocktake: 'Finalise will adjust inventory and lock this stocktake permanently.',
    finalise_supplier_invoice: 'Finalise will adjust inventory and lock this invoice permanently.',
    following_items_reduced_more_than_available_stock:
      'The following items have been reduced by more than the available stock:',
    give_your_stocktake_a_name: 'Give your stocktake a name',
    got_it: 'Got it',
    more: 'more',
    record_stock_required_before_finalising:
      'You need to record how much stock is required before finalising',
    record_stock_to_issue_before_finalising:
      'You need to record how much stock to issue before finalising',
    remove_these_items: 'Are you sure you want to remove these items?',
    remove: 'Remove',
    search_for_an_item_to_add: 'Search for an item to add',
    search_for_the_customer: 'Search for the customer',
    search_for_the_supplier: 'Search for the supplier',
    select_a_language: 'Select a language',
    select_the_number_of_months_stock_required: 'Select the number of months stock required',
    start_typing_to_select_customer: 'Start typing to select customer',
    start_typing_to_select_supplier: 'Start typing to select supplier',
    stock_quantity_greater_then_zero: 'Stock quantity must be greater then zero before finalising',
    stocktake_no_counted_items: "Can't finalise a stocktake with no counted items",
  },
  gil: { // TODO add: search_for_the_supplier, stock_quantity_greater_then_zero, start_typing_to_select_supplier, search_for_the_supplier
    add_at_least_one_item_before_finalising: 'E riai n iai kanoana imwain ae ko finalise',
    and: 'ao',
    cancel: 'kamauna',
    confirm: 'kamatoa',
    create: 'Karina/Karaoa ae boou',
    delete_these_invoices: 'Ko koaua bwa ko na kanakoi am kanakobwai aikai?',
    delete_these_requisitions: 'Ko koaua bwa ko na kanakoi am oota aikai?',
    delete_these_stocktakes: 'Ko koaua bwa ko na kanakoi am warebwai aikai?',
    delete: 'Delete',
    edit_the_invoice_comment: 'Manga bita am kanakobwai',
    edit_the_requisition_comment: 'Manga bita am oota',
    edit_their_reference: 'Bita ana reference number',
    finalise_customer_invoice: 'Ko aki kona n manga bita te invoice ae a tia n Finalise',
    finalise_requisition: 'Am order ae Finalise, e nako, ao ko aki kona n bitia',
    finalise_stocktake: 'Am warebwai ae Finalise, ko aki manga kona n bitia',
    finalise_supplier_invoice: 'Am karao-oota ae Finalise, ko aki manga kona n bitia',
    following_items_reduced_more_than_available_stock:
      'Bwaai aikai aika a tia n kauarereaki nakon mwaitin are inanon baim',
    give_your_stocktake_a_name: 'Arana am warebwai',
    got_it: 'Ngaia anne (Oota Raoi)',
    more: 'Baikara riki?',
    record_stock_required_before_finalising:
      'Ko riai n taua mwin am warebwai imwain ae ko  finalise',
    record_stock_to_issue_before_finalising:
      'Ko riai n taua mwain am kanakobwai imwain ae ko finalise',
    remove_these_items: 'Ko bon kakoaua ae ko na kanakoi aikai?',
    remove: 'Kanakoi ke kamaunai',
    search_for_an_item_to_add: 'Rinea ke kakaea aran te bwai n aoraki',
    search_for_the_customer: 'Rinea am list',
    select_a_language: 'English ke Kiribati',
    select_the_number_of_months_stock_required:
      'Rinea mwaitin te namakaina ae ko kantaningaia ibukin am stock inanon baim',
    start_typing_to_select_customer: 'Karina aran am kiriniki ke am aoraki',
    stocktake_no_counted_items: 'Ko aki kona n Finalise ngkana akea am warebwai',
  },
  tl: {
    add_at_least_one_item_before_finalising: 'Tenke hatama sasán ida antes finaliza',
    and: 'no',
    cancel: 'Kansela',
    confirm: 'Konfirma',
    create: 'Kria',
    delete_these_invoices: "Ita sente tebes ita hakarak hapus konta sira-ne'e?",
    delete_these_requisitions: "Ita sente tebes ita hakarak hapus rekuizisaun sira-ne'e?",
    delete_these_stocktakes: "Ita sente tebes ita hakarak hapus ajustamentu sira-ne'e?",
    delete: 'Apaga',
    edit_the_invoice_comment: 'Hadia komentáriu iha Invoice',
    edit_the_requisition_comment: 'Hadia komentáriu iha rekuizisaun',
    edit_their_reference: 'Hadia Referensia',
    finalise_customer_invoice: "Finaliza sei xave permanente Invoice ne'e.",
    finalise_requisition: "Finaliza sei labele edit rekuizasaun ne'eno xave permanente.",
    finalise_stocktake: "Finaliza sei ajusta inventariu no xave permanente Invoice ne'e.",
    finalise_supplier_invoice:
      "Finaliza sei ajusta inventariu no xave permanente ajustamentu ne'e.",
    following_items_reduced_more_than_available_stock:
      "Item tuir mai ne'e la bele hamenus nia kuantidade menus liu duke kuantidade Item atuál:",
    give_your_stocktake_a_name: 'Justifika naran ajustamentu',
    got_it: 'Komprende',
    more: 'aumenta tan',
    record_stock_required_before_finalising:
      "Ita tenke hatama info kona-ba sasán hira ne'ebé presiza antes bele halo finaliza",
    record_stock_to_issue_before_finalising:
      "Ita tenke hatama info kona-ba sasán hira ne'ebé atu haruka antes bele halo finaliza",
    remove_these_items: "Tebes duni hakarak apaga item sira-ne'e?",
    remove: 'Hasai',
    search_for_an_item_to_add: 'Buka-hetan sasán atu hatama',
    search_for_the_customer: 'Buka-hetan kliente',
    search_for_the_supplier: 'Buka-hetan distribuidor',
    start_typing_to_select_supplier: "Hakerek iha ne'e atu selekta distribuidor",
    stock_quantity_greater_then_zero: 'Kuantidade Disponivel tenki bot liu Zero antes finaliza',
    select_a_language: 'Hili lingua',
    select_the_number_of_months_stock_required: 'Hili numeru sira tuir pedidu',
    start_typing_to_select_customer: "Hakerek kliente nia naran iha ne'e",
    stocktake_no_counted_items: 'La bele finaliza ajustamentu se laiha item ida priense',
  },
});
/* eslint-enable max-len */
