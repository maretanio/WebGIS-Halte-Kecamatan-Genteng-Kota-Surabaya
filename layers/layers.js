var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_KecamatanGenteng_1 = new ol.format.GeoJSON();
var features_KecamatanGenteng_1 = format_KecamatanGenteng_1.readFeatures(json_KecamatanGenteng_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanGenteng_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanGenteng_1.addFeatures(features_KecamatanGenteng_1);
var lyr_KecamatanGenteng_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KecamatanGenteng_1, 
                style: style_KecamatanGenteng_1,
                popuplayertitle: 'Kecamatan Genteng',
                interactive: true,
                title: '<img src="styles/legend/KecamatanGenteng_1.png" /> Kecamatan Genteng'
            });
var format_AreaTerjangkauEmbongKaliasin_2 = new ol.format.GeoJSON();
var features_AreaTerjangkauEmbongKaliasin_2 = format_AreaTerjangkauEmbongKaliasin_2.readFeatures(json_AreaTerjangkauEmbongKaliasin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaTerjangkauEmbongKaliasin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaTerjangkauEmbongKaliasin_2.addFeatures(features_AreaTerjangkauEmbongKaliasin_2);
var lyr_AreaTerjangkauEmbongKaliasin_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaTerjangkauEmbongKaliasin_2, 
                style: style_AreaTerjangkauEmbongKaliasin_2,
                popuplayertitle: 'Area Terjangkau Embong Kaliasin',
                interactive: true,
                title: '<img src="styles/legend/AreaTerjangkauEmbongKaliasin_2.png" /> Area Terjangkau Embong Kaliasin'
            });
var format_AreaTerjangkauGenteng_3 = new ol.format.GeoJSON();
var features_AreaTerjangkauGenteng_3 = format_AreaTerjangkauGenteng_3.readFeatures(json_AreaTerjangkauGenteng_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaTerjangkauGenteng_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaTerjangkauGenteng_3.addFeatures(features_AreaTerjangkauGenteng_3);
var lyr_AreaTerjangkauGenteng_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaTerjangkauGenteng_3, 
                style: style_AreaTerjangkauGenteng_3,
                popuplayertitle: 'Area Terjangkau Genteng',
                interactive: true,
                title: '<img src="styles/legend/AreaTerjangkauGenteng_3.png" /> Area Terjangkau Genteng'
            });
var format_AreaTerjangkauKapasari_4 = new ol.format.GeoJSON();
var features_AreaTerjangkauKapasari_4 = format_AreaTerjangkauKapasari_4.readFeatures(json_AreaTerjangkauKapasari_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaTerjangkauKapasari_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaTerjangkauKapasari_4.addFeatures(features_AreaTerjangkauKapasari_4);
var lyr_AreaTerjangkauKapasari_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaTerjangkauKapasari_4, 
                style: style_AreaTerjangkauKapasari_4,
                popuplayertitle: 'Area Terjangkau Kapasari',
                interactive: true,
                title: '<img src="styles/legend/AreaTerjangkauKapasari_4.png" /> Area Terjangkau Kapasari'
            });
var format_AreaTerjangkauKetabang_5 = new ol.format.GeoJSON();
var features_AreaTerjangkauKetabang_5 = format_AreaTerjangkauKetabang_5.readFeatures(json_AreaTerjangkauKetabang_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaTerjangkauKetabang_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaTerjangkauKetabang_5.addFeatures(features_AreaTerjangkauKetabang_5);
var lyr_AreaTerjangkauKetabang_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaTerjangkauKetabang_5, 
                style: style_AreaTerjangkauKetabang_5,
                popuplayertitle: 'Area Terjangkau Ketabang',
                interactive: true,
                title: '<img src="styles/legend/AreaTerjangkauKetabang_5.png" /> Area Terjangkau Ketabang'
            });
var format_AreaTerjangkauPeneleh_6 = new ol.format.GeoJSON();
var features_AreaTerjangkauPeneleh_6 = format_AreaTerjangkauPeneleh_6.readFeatures(json_AreaTerjangkauPeneleh_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaTerjangkauPeneleh_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaTerjangkauPeneleh_6.addFeatures(features_AreaTerjangkauPeneleh_6);
var lyr_AreaTerjangkauPeneleh_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaTerjangkauPeneleh_6, 
                style: style_AreaTerjangkauPeneleh_6,
                popuplayertitle: 'Area Terjangkau Peneleh',
                interactive: true,
                title: '<img src="styles/legend/AreaTerjangkauPeneleh_6.png" /> Area Terjangkau Peneleh'
            });
var format_ServiceArea_7 = new ol.format.GeoJSON();
var features_ServiceArea_7 = format_ServiceArea_7.readFeatures(json_ServiceArea_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServiceArea_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceArea_7.addFeatures(features_ServiceArea_7);
var lyr_ServiceArea_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceArea_7, 
                style: style_ServiceArea_7,
                popuplayertitle: 'ServiceArea',
                interactive: true,
                title: '<img src="styles/legend/ServiceArea_7.png" /> ServiceArea'
            });
var format_Halte_8 = new ol.format.GeoJSON();
var features_Halte_8 = format_Halte_8.readFeatures(json_Halte_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Halte_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Halte_8.addFeatures(features_Halte_8);
var lyr_Halte_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Halte_8, 
                style: style_Halte_8,
                popuplayertitle: 'Halte',
                interactive: true,
    title: 'Halte<br />\
    <img src="styles/legend/Halte_8_0.png" /> Halte Balai Kota<br />\
    <img src="styles/legend/Halte_8_1.png" /> Halte Bambu Runcing<br />\
    <img src="styles/legend/Halte_8_2.png" /> Halte Basra<br />\
    <img src="styles/legend/Halte_8_3.png" /> Halte Cak Durasim A<br />\
    <img src="styles/legend/Halte_8_4.png" /> Halte Cak Durasim B<br />\
    <img src="styles/legend/Halte_8_5.png" /> Halte Embong Kemiri<br />\
    <img src="styles/legend/Halte_8_6.png" /> Halte Embong Malang<br />\
    <img src="styles/legend/Halte_8_7.png" /> Halte Embong Malang 2<br />\
    <img src="styles/legend/Halte_8_8.png" /> Halte Embong Wungu<br />\
    <img src="styles/legend/Halte_8_9.png" /> Halte Genteng Kali A<br />\
    <img src="styles/legend/Halte_8_10.png" /> Halte Genteng Kali B<br />\
    <img src="styles/legend/Halte_8_11.png" /> Halte Gondosuli<br />\
    <img src="styles/legend/Halte_8_12.png" /> Halte Grand City<br />\
    <img src="styles/legend/Halte_8_13.png" /> Halte Gubernur Suryo<br />\
    <img src="styles/legend/Halte_8_14.png" /> Halte Jaksa Agung Suprapto<br />\
    <img src="styles/legend/Halte_8_15.png" /> Halte Jimerto<br />\
    <img src="styles/legend/Halte_8_16.png" /> Halte Kaliasin<br />\
    <img src="styles/legend/Halte_8_17.png" /> Halte Kantor Dinas Pendidikan<br />\
    <img src="styles/legend/Halte_8_18.png" /> Halte Kayoon 1A<br />\
    <img src="styles/legend/Halte_8_19.png" /> Halte Kayoon 1B<br />\
    <img src="styles/legend/Halte_8_20.png" /> Halte Kayoon 2A<br />\
    <img src="styles/legend/Halte_8_21.png" /> Halte Kayoon 2B<br />\
    <img src="styles/legend/Halte_8_22.png" /> Halte Ketabang Ngemplak<br />\
    <img src="styles/legend/Halte_8_23.png" /> Halte MMPA SIOLA A<br />\
    <img src="styles/legend/Halte_8_24.png" /> Halte Monkasel<br />\
    <img src="styles/legend/Halte_8_25.png" /> Halte Monumen Sudirman<br />\
    <img src="styles/legend/Halte_8_26.png" /> Halte MPP SIOLA B<br />\
    <img src="styles/legend/Halte_8_27.png" /> Halte Ngemplak<br />\
    <img src="styles/legend/Halte_8_28.png" /> Halte Pangsud<br />\
    <img src="styles/legend/Halte_8_29.png" /> Halte Pemuda<br />\
    <img src="styles/legend/Halte_8_30.png" /> Halte PMI<br />\
    <img src="styles/legend/Halte_8_31.png" /> Halte Simpang Dukuh<br />\
    <img src="styles/legend/Halte_8_32.png" /> Halte Sindoro<br />\
    <img src="styles/legend/Halte_8_33.png" /> Halte SIOLA<br />\
    <img src="styles/legend/Halte_8_34.png" /> Halte Slamet<br />\
    <img src="styles/legend/Halte_8_35.png" /> Halte SMPN 3<br />\
    <img src="styles/legend/Halte_8_36.png" /> Halte Sono Kembang<br />\
    <img src="styles/legend/Halte_8_37.png" /> Halte Sono Kembang 2<br />\
    <img src="styles/legend/Halte_8_38.png" /> Halte Taman Apsari<br />\
    <img src="styles/legend/Halte_8_39.png" /> Halte Taman Prestasi<br />\
    <img src="styles/legend/Halte_8_40.png" /> Halte Tunjungan<br />\
    <img src="styles/legend/Halte_8_41.png" /> Halte Urip Sumoharjo 1<br />\
    <img src="styles/legend/Halte_8_42.png" /> Halte Wuni<br />\
    <img src="styles/legend/Halte_8_43.png" /> Halte Yos Sudarso<br />\
    <img src="styles/legend/Halte_8_44.png" /> <br />' });

lyr_Positron_0.setVisible(true);lyr_KecamatanGenteng_1.setVisible(true);lyr_AreaTerjangkauEmbongKaliasin_2.setVisible(true);lyr_AreaTerjangkauGenteng_3.setVisible(true);lyr_AreaTerjangkauKapasari_4.setVisible(true);lyr_AreaTerjangkauKetabang_5.setVisible(true);lyr_AreaTerjangkauPeneleh_6.setVisible(true);lyr_ServiceArea_7.setVisible(true);lyr_Halte_8.setVisible(true);
var layersList = [lyr_Positron_0,lyr_KecamatanGenteng_1,lyr_AreaTerjangkauEmbongKaliasin_2,lyr_AreaTerjangkauGenteng_3,lyr_AreaTerjangkauKapasari_4,lyr_AreaTerjangkauKetabang_5,lyr_AreaTerjangkauPeneleh_6,lyr_ServiceArea_7,lyr_Halte_8];
lyr_KecamatanGenteng_1.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'AREA': 'AREA', });
lyr_AreaTerjangkauEmbongKaliasin_2.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', 'LUAS': 'LUAS', });
lyr_AreaTerjangkauGenteng_3.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', 'LUAS': 'LUAS', });
lyr_AreaTerjangkauKapasari_4.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', });
lyr_AreaTerjangkauKetabang_5.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', 'LUAS': 'LUAS', });
lyr_AreaTerjangkauPeneleh_6.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', 'LUAS': 'LUAS', });
lyr_ServiceArea_7.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', });
lyr_Halte_8.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', });
lyr_KecamatanGenteng_1.set('fieldImages', {'full_id': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'AREA': 'TextEdit', });
lyr_AreaTerjangkauEmbongKaliasin_2.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', 'LUAS': '', });
lyr_AreaTerjangkauGenteng_3.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', 'LUAS': '', });
lyr_AreaTerjangkauKapasari_4.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', });
lyr_AreaTerjangkauKetabang_5.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', 'LUAS': '', });
lyr_AreaTerjangkauPeneleh_6.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'type': '', 'start': '', 'LUAS': '', });
lyr_ServiceArea_7.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_Halte_8.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', });
lyr_KecamatanGenteng_1.set('fieldLabels', {'full_id': 'no label', 'Kecamatan': 'no label', 'Kelurahan': 'no label', 'AREA': 'no label', });
lyr_AreaTerjangkauEmbongKaliasin_2.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', 'LUAS': 'no label', });
lyr_AreaTerjangkauGenteng_3.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', 'LUAS': 'no label', });
lyr_AreaTerjangkauKapasari_4.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_AreaTerjangkauKetabang_5.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', 'LUAS': 'no label', });
lyr_AreaTerjangkauPeneleh_6.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'header label - visible with data', 'LUAS': 'no label', });
lyr_ServiceArea_7.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_Halte_8.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', });
lyr_Halte_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});