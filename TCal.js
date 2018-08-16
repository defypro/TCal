/**
 * 传统历法转换工具
 * 用法 TCal.get("2000/1/1")
 * 返回结果参见FDAY
 */

TCal = {
	FDAY: {
		date: new Date("1900/01/01"),
		y: 1989,
		m: 12,
		d: 1,
		wd: 1,
		yn: "一九八九年",
		mn: "腊月",
		dn: "初一",
		wdn: "周一",
		ygz: "己亥",
		mgz: "丙子",
		dgz: "甲戌",
		jq: "",
		leap: false
	},
	YINFO: ["Vfbk3kaaQlt","STb282bDAlc","WIEfm2bTBSu","VdbknjbYKpN","WQbk3kaaBpM","SEb282bDBsq","VZEe/2bTI1V","WNbknjbYArU","WCbk3kaaBNa",
		"RWb282bDEld","WKEe/2bTAlc","VebknjbYNSb","WSbk3kaYBSa","SGb282bCBpK","Rab2/2bTLql","WOWfm7bTBao","WDbk3jwYBrU",
		"RXb080aaFLa","SLb2/2bDBK2","WBWfm7bTOk3","WUbk3jwYAku","SIbk80aaBSW","Rcb2/2bDLZL","WQEfm7bTA1K","WFbk3jwYA2o",
		"RYbk80aaJW1","SNb282bDAVs","WCEfm2bTBKu","VXbknjbYEkv","SKbk3kaaAku","Reb282bDMyW","WREfm2bTBqU","WGbknjbYB1K",
		"Rabk3kaaK2p","SOb282bDAta","WEEe/2bTAVs","VYbknjbYHJu","SLbk3kaaBJc","Rfb282bDPkt","WTEe/2bTBkq","WIbknjbYBqU",
		"Rbbk3kaaNtK","SPb282bDBaq","WFEe/2bTArU","VZbfnjbYJVb","SNbk3jwYAS6","SCb280bCBJa","RWb2/2bTFkr","WKWfm7bTBUq",
		"Rdbk3jwYPaV","SRbk80bCA2U","SGb2/2bTBaq","VbWfm7bTKq1","SObk3jwYAm0","SDbk80aaBS2","RYb282bDGpX","WMUfm7bTApW",
		"Rfbk3jwYRUq","SSbk3kaaB0q","SIb282bDA1U","VcEfm2bTNWq","SPbknjbYBVq","SFbk3kaaAls","RZb282bDJSu","WNEfm2bTBSu",
		"SCbknjbYApM","RVbk3kaaH0m","SJb282bDBsq","VeEe/2bTOtV","SRbknjbYArU","SGbk3kaaBLa","Rbb282bDKld","WPEe/2bTAla",
		"SDbfnjbYBSa","RXbk3kaaJpN","SLb280bDBpK","VfD2/2bTRql","SSbfm7bYBao","SHbk3jyaBbU","Rcb080bDNLa","WQD2/2bTBK2",
		"SFbfm7bYAk2","RZbk3jwYJSX","SNbk80bCBSW","SCb282bTVZL","SUWfm7bTA1K","SJbk3jwYA2o","Rdbk30aaNW0","SRb282bDBVs",
		"SGUfm2bTBKu","RbbknjwYKkv","SPbk3kaaAku","SEb282bDAyW","RXEfm2bTG1K","SKbknjbYB1K","Rfbk3kaaQ1l","STb282bDAtY",
		"SHEe/2bTBVs","RcbknjbYLJt","SQbk3kaaBJc","SFb282bDBks","RYEe/2bTJqV","SMbknjbYBqU","SBbk3kaaBtK","RWb282bDEtV",
		"SJEe/2bTArU","Rdbfm7bYPVb","SSbk3kaaAS6","SHb280bDBJa","RaD2/2bTLkr","SObfm7bYBUq","SDbk3jyaBaU","RXb080bDJaq",
		"SKD282bTBWq","Rfbfm7bYSq1","STbk3jwYAl0","SIbk80bCBS2","Ncb282bTMpX","SQWfm7bTApW","SFbknjwYBUm","RZbk3kbCI6V",
		"OMb282bDA1U","SBUfm2bTBWq","RWbknjwYEm1","SKbk3kaaAls","Ndb282bDNSu","SREe/2bTBSc","SGbknjbYBpM","Rabk3kaaL0m",
		"ONb282bDBqm","SDEe/2bTAtU","RXbknjbYG1q","SLbk3kaaBLa","Nfb282bDWlc","STEe/2bTAla","SIbfm7bYBSa","Rcbk3kaaNpL",
		"OPb282bDBpK","SEEe/2bTBqk","RYbfm7bYLtU","SMbk3kaaBa0","OBb080bDAra","RWD2/2bTElb","SKbfm7bYAk2","Rebk3jyaPSX",
		"ORbk80bDBSW","SGD282bTBVK","Rabfm7bYLal","SObknjwYA2k","OCbk3kbCBW0","NXb282bTGq2","SLUfm2bTBJu","SBbknjwYQkv",
		"OTbk3kbCAku","OIb282bTAyW","RcUe/2bTM1K","SPbknjwYB1K","OEbk3kaaA1U","NYb282bDJVs","SMUe/2bTBVc","SCbknjbYBJc",
		"NVbk3kaaHku","OJb282bDBks","RdEe/2bTPqV","SRbknjbYBqU","OFbk3kaaBtK","Nab282bDKtV","SOEe/2bTArU","SDbfm7bYBTa",
		"NXbk3kaaIpd","OLb080bDApa","RfEe/2bTRUr","STbfm7bYBUq","OHbk3jyaBaU","Nbb080bDNaq","SPD282bTBWq","SFbfm7bYAq0",
		"NYbk3jyaJS6","OMbk30bDBS2","SCD282bTApW","RWbfm7bYHUn","OJbknjwaA0m","Ndbk3kbCO5T","ORb282bTA1U","SGUfm2bTBWq",
		"NabknjwYKm1","OObk3kbCAls","ODb282bTBSu","RYUe/2bTIpO","OKbknjwYBos","Nebk3kaaR0m","OSb282bDBqk","SHUe/2bTBtU",
		"NbbknjbYM1q","OPbk3kaaAra","OFb282bDAlc","RZEe/2bTJSd","OMbkm7bYBRa","OBbk3kaaBoq","NVb282bDFsl","SJEe/2bbBqk"],
	BASE64:{"A":0,"B":1,"C":2,"D":3,"E":4,"F":5,"G":6,"H":7,"I":8,"J":9,"K":10,"L":11,"M":12,"N":13,"O":14,"P":15,"Q":16,
			"R":17,"S":18,"T":19,"U":20,"V":21,"W":22,"X":23,"Y":24,"Z":25,"a":26,"b":27,"c":28,"d":29,"e":30,"f":31,"g":32,
			"h":33,"i":34,"j":35,"k":36,"l":37,"m":38,"n":39,"o":40,"p":41,"q":42,"r":43,"s":44,"t":45,"u":46,"v":47,"w":48,
			"x":49,"y":50,"z":51,"0":52,"1":53,"2":54,"3":55,"4":56,"5":57,"6":58,"7":59,"8":60,"9":61,"/":62,"+":63},
	GAN:["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"],
	ZHI:["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"],
	JN:["立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑",
		"立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至","小寒","大寒"],
	MN:["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"],
	DN:["初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十",
		"十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十",
		"廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十"],
	NUMS:["零","一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
	get: function(dateStr) {
		var date = new Date(dateStr);  // Example: 1980/1/1
		var lunarDate = this.getLunarDate(date);
		var gzDate = this.getGanzhiDate(date);
		
		for (i in gzDate) {
			lunarDate[i] = gzDate[i];
		}
		
		return lunarDate;
	},
	getLunarDate: function(date){
		var y = date.getFullYear();
		var d = 0;
		var m = 0;
		var sumDays = 0; 
		var leap = false;
		
		var yearInfo = this.getYearInfo(y);
		var dateDiff = this.getDateDiff(yearInfo.cjDate, date);
		
		if (dateDiff<0) {
			y--;
			yearInfo = this.getYearInfo(y);
			dateDiff = this.getDateDiff(yearInfo.cjDate, date);
		}
		
		var months = yearInfo.mons;
		for (var i=0; i<months.length; i++) {
			if ( sumDays + months[i] > dateDiff) {
				d = dateDiff - sumDays + 1;
				m = ( yearInfo.leapMonth!=0 && i >= yearInfo.leapMonth) ? i : i+1;
				leap = (m == i && m == yearInfo.leapMonth) ? true: false;
				break;
			}
			sumDays += months[i];
		}
		
		var yn = this.getYearName(y);
		var mn = this.getMonthName(m);
		var dn = this.getDayName(d);

		return {y:y, m:m, d:d, yn:yn, mn: mn, dn: dn, leap:leap};
	},
	getGanzhiDate: function(date){
		var y = date.getFullYear();
		var m = -1;
		var jq = "";
		var sumDays = 0; 
		var yearInfo = this.getYearInfo(y);
		var dateDiff = this.getDateDiff(yearInfo.lcDate, date);
		
		if (dateDiff<0) {
			y--;
			yearInfo = this.getYearInfo(y);
			dateDiff = this.getDateDiff(yearInfo.lcDate, date);
		}
		
		var jqDays = yearInfo.jqDays;
		for (var i=0; i<jqDays.length; i+=2) {
			if ( sumDays + jqDays[i] + jqDays[i+1]> dateDiff) {
				jq = (dateDiff == sumDays) ? jq = this.JN[i] : jq;
				jq = (dateDiff == sumDays + jqDays[i+1]) ? jq = this.JN[i+1] : jq;
				m = i/2 + 1;
				break;
			}
			sumDays += (jqDays[i]+ jqDays[i+1]);
		}
		
		var yIdx = y - this.FDAY.date.getFullYear() + this.getGanzhiIdx(this.FDAY.ygz) + 1;
		var mIdx = (y - this.FDAY.date.getFullYear())*12 + m + this.getGanzhiIdx(this.FDAY.mgz) + 1;
		
		var toFirstDay = this.getDateDiff(this.FDAY.date, date);
		var dIdx = toFirstDay + this.getGanzhiIdx(this.FDAY.dgz);
		
		var weekDay= toFirstDay % 7 + 1;
		var weekDayName = this.getWeekDayName(weekDay);
		
		return {
			jq: jq, 
			wd: weekDay,
			wdn: weekDayName,
			ygz: this.getGanzhiName(yIdx), 
			mgz: this.getGanzhiName(mIdx), 
			dgz: this.getGanzhiName(dIdx)
		};
		
	},
	getGanzhiIdx: function(name){
		for (var i = 0; i < 60; i++) {
			if (this.getGanzhiName(i) == name) {
				return i;
			}
		}
		return -1;
	},
	getGanzhiName: function(index){
		var i = index % 60;
		return this.GAN[i%10] + this.ZHI[i%12]; 
	},
	getYearName: function(y){
		var result = "";
		var str = y + "";
		for (var i = 0; i < str.length; i++) {
			result += this.NUMS[parseInt(str[i])];
		}
		return result + "年";
	},
	getMonthName: function(i){
		return this.MN[i-1] + "月";
	},
	getDayName: function(i){
		return this.DN[i-1];
	},
	getWeekDayName: function(i) {
		return i==7 ? "周日" : ("周" + this.NUMS[i]);
	},
	getDateDiff: function(from, to){
		return parseInt((to.getTime()-from.getTime())/1000/60/60/24);
	},
	getYearInfo : function(year) {
		var str = this.YINFO[year - this.FDAY.date.getFullYear()];
		var lcToken = this.decBase64(str[0]); //4bit: lichun day, 2bit: chunjie month
		var cjToken = this.decBase64(str[1]); //6bit: chunjie month
		var jqToken = this.decBase64(str.substring(2, 8)); //36bit:jieqi days, 
		var monToken = this.decBase64(str.substring(8, 11)); // 5bit: runyue, 13bit: month counts
		
		var lcDay = parseInt(lcToken.substring(0,4), 2);
		var cjMonth = parseInt(lcToken.substring(4,6), 2);
		var cjDay = parseInt(cjToken, 2);
		
		
		var jqDays = this.decJieqi(jqToken);
		var monInfo = this.decMonths(monToken);
		
		var lcDate = new Date(year + "/2/" + lcDay);
		var cjDate = new Date(year + "/" + cjMonth +"/" + cjDay);
		
		return {
			lcDate:lcDate, cjDate:cjDate, 
			leapMonth: monInfo.leapMonth, 
			mons:monInfo.mons, 
			jqDays: jqDays
		};
	},
	decJieqi: function(jqToken){
		var jqDays = [];
		for (var i=0; i<jqToken.length; i++) {
			var keys = [[14, 15], [14, 16], [15, 14], [15, 15], [15, 16], [16, 14], [16, 15], [16, 16]];
			var num = parseInt(jqToken[i]);
			jqDays.push(keys[num][0], keys[num][1]);		
		}
		return jqDays;
	},
	decMonths: function(monToken) {
		var leapMonth = parseInt(monToken.substring(0, 5), 2);
		var mons =[];
		for (var i=5; i<(leapMonth == 0 ? 12 + 5 : 13 + 5); i++){
			mons.push(monToken[i] == "0" ? 29 : 30);
		}
		return {leapMonth: leapMonth, mons: mons};
	},
	decBase64 : function(str){
		var result = "";
		for (var i=0; i<str.length; i++){
			result += this.padding(this.BASE64[str[i]].toString(2), 6);
			
		}
		return result;
	},
	padding: function(str, len) {
		var result = str;
		while (result.length < len){
			result = "0" + result;
		}
		return result;
	}	
};