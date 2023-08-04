$(function(){
	var templateApp = new Vue({
		el: "#templateApp",
		data: {
			title: "",
			subtitle: "", //朗读下面一段独白，注意语音、语调、连读、辅音。
			description: "",
			dropdown_title: "",
			dropdown_subtitle: "",
			dropdown_description: "",
			hint: '',
			content: "",
			content_img: "",
			dropdown_con_active: false,
			getScore: 0,
			allScore: 1,
			hasHalfStarImg: true,
			isDwdContainer: false,
			questions: [],
			containerHidden: true,
			materialUrl: '',
			content_choose: "",
			hint_2: "",
			content_choose2: "",
			content_fill_answer: "",
		},
		// 方法
		methods: {
			// 替换换行等为<br />
			formatString: function(str){
				return str.replace(/\r\n|\r|\n|↵/g, '<br/>')
			},
			formatHtml: function(str){
				return '<p>'+str+'</p>'
			},	
			formatHtmlPContent: function(str,audio_src,index){
				return '<p>' + str + (audio_src?'<span class="record_icon stander_record" id="'+audio_src+'" data-path="'+this.getMaterialPath(index)+'"></span>':'') + '</p>'
			},
			formatAnswerHtmlPContent: function(str,audio_src,index){
				return '<p>· ' + str + (audio_src?'<span class="record_icon stander_record" id="'+audio_src+'" data-path="'+this.getMaterialPath(index)+'"></span>':'') + '</p>'
			},
			// 点击显示或隐藏副标题以及描述等内容
			toggleDropdown: function(){
				this.dropdown_con_active =!this.dropdown_con_active
			},
			// 素材需要加上路径
			getMaterialUrl: function(index, file){
				return this.getMaterialPath(index) + file;
			},
			getMaterialPath: function(index){
				return typeof this.materialUrl === 'string' ? this.materialUrl : this.materialUrl[index];
			},
			// 点击显示大图
			showBigImg: function(index, file){
				var url = this.getMaterialUrl(index, file);
				etsCommon.showBigImg(url);
			},
			isPicChooseQue: function(item){
				return item['xxlist'][0]['xx_wj'] != ''
			},
			getNotScoreContentAudioHtml: function(item,index){
				var html = item.st_nr;
				if (item.audio) {
					html += '<span class="record_icon stander_record" id="'+item.audio+'" data-path="'+this.getMaterialPath(index)+'"></span>'
				}
				return html
			},
			getContentAudioHtml: function(item,index){
				var html = item.st_nr;
				if (item.audio) {
					html += '<span class="red">(<span class="q_score_con">未作答</span>)</span><span class="record_icon stander_record" id="'+item.audio+'" data-path="'+this.getMaterialPath(index)+'"></span>'
				}
				return html
			},
			getXtContentAudioHtml: function(item,index){
				var html = item.xt_nr + '<span class="red">(<span class="q_score_con">未作答</span>)</span>';
				if (item.xt_wj) {
					html += '<span class="record_icon stander_record" id="'+item.xt_wj+'" data-path="'+this.getMaterialPath(index)+'"></span>'
				}
				return html
			},
			
		},
		// 计算属性
		computed: {
			scoreRationColor: function(){
				var get_s = this.getScore;
				var all_s = this.allScore;
				return etsCommon.getScoreTextColor(get_s, all_s);
			},
			scoreStarRationLevel: function(){
				var ration = this.getScore / this.allScore;
				var level = 0;
				if (ration < 0.1) {
					level = 0;
				} else if (ration >= 0.1 && ration < 0.2) {
					level = 1;
				} else if (ration >= 0.2 && ration < 0.3) {
					level = 2;
				} else if (ration >= 0.3 && ration < 0.4) {
					level = 3;
				} else if (ration >= 0.4 && ration < 0.5) {
					level = 4;
				} else if (ration >= 0.5 && ration < 0.6) {
					level = 5;
				} else if (ration >= 0.6 && ration < 0.7) {
					level = 6;
				} else if (ration >= 0.7 && ration < 0.8) {
					level = 7;
				} else if (ration >= 0.8 && ration < 0.9) {
					level = 8;
				} else if (ration >= 0.9 && ration < 0.95) {
					level = 9;
				} else if (ration >= 0.95 && ration <= 1) {
					level = 10;
				};
				return level
			}
		},
		// 创造实例之前
		beforeCreate: function(){

		},
		// 创造实例之后
		created: function(){

		},
		// 挂载开始之前
		beforeMount: function(){

		},
		// 挂载到实例之后
		mounted: function(){

		},
		// 数据更新之前
		beforeUpdate: function(){

		},
		// 数据更新导致dom重新渲染之后
		updated: function(){

		},
		// 实例销毁之前
		beforeDestroy: function(){

		},
		// 实例销毁之后
		destroyed: function(){

		}
	})
	window.templateApp = templateApp;
})