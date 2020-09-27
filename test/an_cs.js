$(function(){
	$("#tg6").on("click", function() {
		$(".eqp").autocomplete( {
			source: Lst_eqp[0],
		});
	});


	$("#tg1").on("click", function() {
		$(".inf").toggle();
		$(".brk").toggle();
		($(".brk").css("display") === "none") ? $(this).text("詳細表示") : $(this).text("一覧表示");
	});

	$("#tg3").on("click", function() {
		$(".b_mst").toggle();
		($(".b_mst").css("display") === "none") ? $(this).text("極意スキル欄表示") : $(this).text("極意スキル欄非表示");
	});

	if($(window).width() > 980) {
		$("#tg2").text("1列表示");

		$("#tg2").on("click", function() {
			if($(".d_aln").css("display") == "table-cell") {
				$(".d_aln").css("display", "block");
				$(this).text("2列表示");
			}
			else{
				$(".d_aln").css("display", "table-cell");
				$(this).text("1列表示");
			}
		});

		$(".clr").on("click", function() {
			$(this).prev().val("").focus().autocomplete("close");
		});
	}
	else {
		var scl = -1;

		$("#tg2").on("click", function() {
			if(scl == -1) {
				scl = $(window).scrollTop();
				$(".t_amm").hide();
				$(".t_fsn").hide();
				$(".t_skl").hide();
				$(".d_cls").hide();
				$(".d_ins").hide();
				$(this).text("ステータス非表示");
			}
			else {
				$(".t_amm").show();
				$(".t_fsn").show();
				$(".t_skl").show();
				$(".d_cls").show();
				$(".d_ins").show();
				$(window).scrollTop(scl);
				scl = -1;
				$(this).text("ステータス表示");
			}
		});

		$(".clr").on("click", function() {
			$(this).prev().val("").autocomplete("search", "").autocomplete("close");
		});
	}

	$(function(){
		$(".eqp").each(function() {
			set_acp_eqp($(this));
		});
		set_acp_ttl($("#tt1"), 1);
		set_acp_ttl($("#tt2"), 2);
		set_acp_fsn($(".fsn"));
		set_acp_skl($(".skl"), 0);

		$("#wp2").hide();
		$("#wp3").hide();
		$("#sh2").hide();
		$("#ac4").hide();
		$("#ac5").hide();
		$("#ac6").hide();

		$("#rc1").val(Lst_rac[0]);
		prc_rac($("#rc1"));

		var Lst_mst_tmp = Dat_mst.filter(val => val[1] === 7);
		for(var i = 1; i <= 6; i++) {
			prc_mst($("#ms" + i).val(Lst_mst_tmp[i - 1][0]));
		}

		rst_wpn();
	});

	var Lst_opt = Dat_opt.map(val => val[0]);
	var Lst_aka = Dat_aka.map(val => val[0]);

	var Lst_eqp = [
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
	];
	Dat_eqp.map(function(val) {
		Lst_eqp[0].push(val[0]);
		Lst_eqp[val[1]].push(val[0]);
	});

	var Lst_rac = Dat_rac.map(val => val[0]);
	var Lst_job = Dat_job.map(val => val[0]);
	var Lst_fsn = Dat_fsn.map(val => val[0]);
	var Lst_mst = Dat_mst.map(val => val[0]);

	var Lst_ttl = [[],[],];
	Dat_ttl.map(val => Lst_ttl[val[1] - 1].push(val[0]));

	var Lst_skl = [
		[],
		[],
		[],
		[],
		[],
		[],
		[],
		[],
	];
	Dat_skl.map(function(val) {
		Lst_skl[0].push(val[0]);
		if(1 <= val[1] && val[1] <= 6) Lst_skl[val[1]].push(val[0]);
	});

	var Idv_opt = [];
	var Idv_aka = [];
	var Idv_eqp = [];
	var Idv_rac = [];
	var Idv_job = [];
	var Idv_ttl = [];
	var Idv_fsn = [];
	var Idv_mst = [];
	var Idv_skl = [];
	var Idv_all = [];
	var Sum_opt = [];
	var Mag_opt = [];
	var Mag_aka = [];
	var Mag_tmp = [];

	var Cor_fsn = [[],[],[],[],];
	var Cor_skl = [[],[],[],[],];
	var Eqp_log = [1, 1, 1, 1, 1, 1, 3];

	var rst_job = "_1_2_3_4_5_6_7_8_";
	var rst_skl = "";

	var Grp = [];
	var Pnt = [];
	var txt;
	var skl;

	//opt
	$(".opt").autocomplete( {
		source: Lst_opt,
		autoFocus: true,
		minLength: 0,
		close: function() {
			prc_opt(this);
		},
	}).focusin(function() {
		$(this).autocomplete("search", "");
	}).click(function() {
		$(this).autocomplete("search", "");
	});

	function prc_opt(tgt) {
		Grp["amm"] = $(tgt).attr("id").substr(0, 3);
		Pnt["amm"] = Asn[Grp["amm"]] * 3 + parseInt($(tgt).attr("id").substr(-1, 1)) - 1;

		Idv_opt[Pnt["amm"]] = Dat_opt.find(val => val[0] === $(tgt).val());
		if(Idv_opt[Pnt["amm"]] === undefined) Idv_opt[Pnt["amm"]] = [];

		Sum_opt[Asn[Grp["amm"]]] = [];
		Mag_tmp = [];
		clc_opt(Asn[Grp["amm"]], 0);
		clc_opt(Asn[Grp["amm"]], 1);
		clc_opt(Asn[Grp["amm"]], 2);

		Mag_opt[Asn[Grp["amm"]]] = 0;
		if(Mag_tmp.length > 1) {
			Mag_opt[Asn[Grp["amm"]]] = -1 + Mag_tmp.filter(val => val === Mag_tmp[0]).length;
			if(Mag_tmp.length === 3 && Mag_opt[Asn[Grp["amm"]]] === 0) {
				Mag_opt[Asn[Grp["amm"]]] = -1 + Mag_tmp.filter(val => val === Mag_tmp[1]).length;
			}
		}

		clc_amm();
		clc_all();
	}

	function clc_opt(arg, ofs) {
		if(Idv_opt[arg * 3 + ofs] !== undefined) {
			Idv_opt[arg * 3 + ofs].map(function(val, idx) {
				if(idx > 30 && val !== undefined) {
					Sum_opt[arg][idx] = isNaN(Sum_opt[arg][idx]) ? val : (Sum_opt[arg][idx] + val);
				}
			});
			if(Idv_opt[arg * 3 + ofs][0] !== undefined && Idv_opt[arg * 3 + ofs][0].length > 0) {
				Mag_tmp.push(Idv_opt[arg * 3 + ofs][0]);
			}
		}
	}

	//aka
	$(".aka").autocomplete( {
		source: Lst_aka,
		autoFocus: true,
		minLength: 0,
		close: function() {
			prc_aka(this);
		},
	}).focusin(function() {
		$(this).autocomplete("search", "");
	}).click(function() {
		$(this).autocomplete("search", "");
	});

	function prc_aka(tgt) {
		Grp["amm"] = $(tgt).attr("id").substr(0, 3);

		Idv_aka[Asn[Grp["amm"]]] = Dat_aka.find(val => val[0] === $(tgt).val());
		if(Idv_aka[Asn[Grp["amm"]]] === undefined || Idv_aka[Asn[Grp["amm"]]][0].length === 0) {
			Idv_aka[Asn[Grp["amm"]]] = [];
			Mag_aka[Asn[Grp["amm"]]] = 0;
		}
		else Mag_aka[Asn[Grp["amm"]]] = 1;

		clc_amm();
		del_skl() && clc_all();
	}

	//eqp
	function set_acp_eqp(tgt) { 
		tgt.autocomplete( {
			source: Lst_eqp[tgt.attr("data-sys")],
			autoFocus: true,
			minLength: 0,
			close: function() {
				prc_eqp(this);
			},
		}).focusin(function() {
			$(this).autocomplete("search", "");
		}).click(function() {
			$(this).autocomplete("search", "");
		});
	}

	function prc_eqp(tgt) {
		Grp["amm"] = $(tgt).attr("id").substr(0, 3);

		Idv_eqp[Asn[Grp["amm"]]] = Dat_eqp.find(val => val[0] === $(tgt).val());
		if(Idv_eqp[Asn[Grp["amm"]]] === undefined) Idv_eqp[Asn[Grp["amm"]]] = [];

		clc_amm();
		del_skl() && clc_all();
	}

	function clc_amm() {
		txt = "";
		if(Sum_opt[Asn[Grp["amm"]]] !== undefined) {
			Sum_opt[Asn[Grp["amm"]]].map(function(val, idx) {
				if(idx > 30 && val !== undefined) {
					val *= 1 + ((Mag_opt[Asn[Grp["amm"]]] === undefined) ? 0 : Mag_opt[Asn[Grp["amm"]]]) + ((Mag_aka[Asn[Grp["amm"]]] === undefined) ? 0 : Mag_aka[Asn[Grp["amm"]]]);
					txt += Prm[idx] + ((val > 0) ? "+" : "") + val + "　";
				}
			});
		}
		$("#" + Grp["amm"] + "bo").text(txt);

		txt = "";
		skl = "";
		if(Idv_aka[Asn[Grp["amm"]]] !== undefined) {
			Idv_aka[Asn[Grp["amm"]]].map(function(val, idx, Ary) {
				if(val !== undefined) {
					if(idx > 30) {
						val *= ((Mag_opt[Asn[Grp["amm"]]] === undefined) ? 0 : Mag_opt[Asn[Grp["amm"]]]) + ((Mag_aka[Asn[Grp["amm"]]] === undefined) ? 0 : Mag_aka[Asn[Grp["amm"]]]);
						txt += Prm[idx] + ((val > 0) ? "+" : "") + val + "　";
					}
					else if(idx > 2) {
						prc_skl($(".skl:last").val(val), Ary[0]);
						skl += val + "　";
					}
				}
			});
		}
		$("#" + Grp["amm"] + "ba").text(txt + skl);

		txt = "";
		skl = "";
		if(Idv_eqp[Asn[Grp["amm"]]] !== undefined) {
			Idv_eqp[Asn[Grp["amm"]]].map(function(val, idx, Ary) {
				if(val !== undefined) {
					if(idx > 30) {
						val *= 1 + ((Mag_opt[Asn[Grp["amm"]]] === undefined) ? 0 : Mag_opt[Asn[Grp["amm"]]]) + ((Mag_aka[Asn[Grp["amm"]]] === undefined) ? 0 : Mag_aka[Asn[Grp["amm"]]]);
						txt += Prm[idx] + ((val > 0) ? "+" : "") + val + "　";
					}
					else if(idx > 2) {
						prc_skl($(".skl:last").val(val), Ary[0]);
						skl += val + "　";
					}
				}
			});
		}
		$("#" + Grp["amm"] + "be").text(txt + skl);
	}

	function rst_wpn() {
		Lst_eqp[15] = [];
		for(var i = 1; i <= 14; i++) {
			if(RegExp("_" + i + "_").test(rst_job + rst_skl)) {
				Lst_eqp[15] = Lst_eqp[15].concat(Lst_eqp[i]);
			}
		}
		$("#wp1e").autocomplete( {
			source: Lst_eqp[15],
		});
	}

	//rac
	$(".rac").autocomplete( {
		source: Lst_rac,
		autoFocus: true,
		minLength: 0,
		close: function() {
			prc_rac(this);
		},
	}).focusin(function() {
		$(this).autocomplete("search", "");
	}).click(function() {
		$(this).autocomplete("search", "");
	});

	function prc_rac(tgt) {
		Idv_rac = Dat_rac.find(val => val[0] === $(tgt).val());
		if(Idv_rac === undefined) Idv_rac = [];

		clc_rac();
		del_skl() && clc_all();
	}

	function clc_rac() {
		txt = "";
		skl = "";
		if(Idv_rac !== undefined) {
			Idv_rac.map(function(val, idx, Ary) {
				if(val !== undefined) {
					if(idx > 30) {
						txt += Prm[idx] + ((val > 0) ? "+" : "") + val + "　";
					}
					else if(idx > 2) {
						prc_skl($(".skl:last").val(val), Ary[0]);
						skl += val + "　";
					}
				}
			});
		}
		$("#rc1be").text(txt + skl);
	}

	//job
	$(".job").autocomplete( {
		source: Lst_job,
		autoFocus: true,
		minLength: 0,
		close: function() {
			prc_job(this);
		},
	}).focusin(function() {
		$(this).autocomplete("search", "");
	}).click(function() {
		$(this).autocomplete("search", "");
	});

	function prc_job(tgt) {
		Grp["job"] = $(tgt).attr("id").slice(2);

		Idv_job[Grp["job"]] = Dat_job.find(val => val[0] === $(tgt).val());
		if(Idv_job[Grp["job"]] === undefined) Idv_job[Grp["job"]] = [];

		clc_job();
		del_skl() && clc_all();
	}

	function clc_job() {
		txt = "";
		skl = "";
		if(Grp["job"] == 1) {
			if(Idv_job[1] !== undefined) {
				Idv_job[1].map(function(val, idx, Ary) {
					if(val !== undefined) {
						if(idx > 30) {
							txt += Prm[idx] + ((val > 0) ? "+" : "") + val + "　";
						}
						else if(idx > 2) {
							prc_skl($(".skl:last").val(val), Ary[0]);
							skl += val + "　";
						}
						else if(idx === 2) {
							prc_mst($("#ms7").val(val));
						}
					}
				});
				rst_job = Idv_job[1][1];
				rst_wpn();
			}
			$("#jb1be").text(txt + skl);
		}
		else if(Idv_job[Grp["job"]] !== undefined && Idv_job[Grp["job"]][2] !== undefined) {
			prc_mst($("#ms" + (6 + parseInt(Grp["job"]))).val(Idv_job[Grp["job"]][2]));
		}
		else {
			prc_mst($("#ms" + (6 + parseInt(Grp["job"]))).val(""));
		}
	}

	//ttl
	function set_acp_ttl(tgt, sys) { 
		tgt.autocomplete( {
			source: Lst_ttl[sys - 1],
			autoFocus: true,
			minLength: 0,
			close: function() {
				prc_ttl(this);
			},
		}).focusin(function() {
			$(this).autocomplete("search", "");
		}).click(function() {
			$(this).autocomplete("search", "");
		});
	};

	function prc_ttl(tgt) {
		Grp["ttl"] = $(tgt).attr("id").slice(2);

		Idv_ttl[Grp["ttl"]] = Dat_ttl.find(val => val[0] === $(tgt).val());
		if(Idv_ttl[Grp["ttl"]] === undefined) Idv_ttl[Grp["ttl"]] = [];

		clc_ttl();
		del_skl() && clc_all();
	}

	function clc_ttl() {
		txt = "";
		skl = "";
		if(Idv_ttl[Grp["ttl"]] !== undefined) {
			Idv_ttl[Grp["ttl"]].map(function(val, idx, Ary) {
				if(val !== undefined) {
					if(idx > 30) {
						txt += Prm[idx] + ((val > 0) ? "+" : "") + val + "　";
					}
					else if(idx > 2) {
						prc_skl($(".skl:last").val(val), Ary[0]);
						skl += val + "　";
					}
				}
			});
		}
		$("#tt" + Grp["ttl"] + "be").text(txt + skl);
	}

	//fsn
	function set_acp_fsn(tgt) { 
		tgt.autocomplete( {
			source: Lst_fsn,
			autoFocus: true,
			minLength: 0,
			close: function() {
				prc_fsn(this, "self");
				del_fsn();
			},
		}).focusin(function() {
			$(this).autocomplete("search", "");
		}).click(function() {
			$(this).autocomplete("search", "");
		});
	};

	function prc_fsn(tgt, org) {
		var flg;

		Grp["fsn"] = $(tgt).attr("id");
		if(Grp["fsn"] !== undefined) {
			Pnt["fsn"] = Grp["fsn"].slice(2);

			flg = 0;
			Idv_fsn[Pnt["fsn"]] = Dat_fsn.find(val => val[0] === $(tgt).val());
			if(Idv_fsn[Pnt["fsn"]] === undefined) Idv_fsn[Pnt["fsn"]] = [];

			if(Idv_fsn[Pnt["fsn"]].length !== 0) {
				flg = 1;
				if(Cor_fsn[0].includes(Idv_fsn[Pnt["fsn"]][0])) flg = 2;

				if(!Cor_fsn[3].includes(Idv_fsn[Pnt["fsn"]][0] + "/" + org)) {
					Cor_fsn[0].push(Idv_fsn[Pnt["fsn"]][0]);
					Cor_fsn[2].push(org);
					Cor_fsn[3].push(Idv_fsn[Pnt["fsn"]][0] + "/" + org);
					if(flg !== 2)	Cor_fsn[1].push(Grp["fsn"]);
					else 		Cor_fsn[1].push(Cor_fsn[1][Cor_fsn[0].indexOf(Idv_fsn[Pnt["fsn"]][0])]);
				}
			}

			if(flg === 2) {
				if(org === "self") {
					//該当するセルに色塗るかなんか
				}
				else {
					Idv_fsn[Pnt["fsn"]] = [];
					$(tgt).val("");
				}
			}
			else if(org === "self" && flg === 0) {
				var tal = Cor_fsn[2].length - 1;
				Cor_fsn[2].slice().reverse().forEach(function(val, idx) {
					if(val === org) {
						Cor_fsn[0].splice(tal - idx, 1);
						Cor_fsn[1].splice(tal - idx, 1);
						Cor_fsn[2].splice(tal - idx, 1);
						Cor_fsn[3].splice(tal - idx, 1);
					}
				});
			}
		}

		clc_fsn();
		del_skl() && clc_all();

		$(".fsn").each(function() {
			if($(this).val().length == 0) $(this).closest(".b_fsn").remove();
		});
		cln_fsn();
	}

	function clc_fsn() {
		txt = "";
		skl = "";
		if(Idv_fsn[Pnt["fsn"]] !== undefined) {
			Idv_fsn[Pnt["fsn"]].map(function(val, idx, Ary) {
				if(val !== undefined) {
					if(idx > 30) {
						txt += Prm[idx] + ((val > 0) ? "+" : "") + val + "　";
					}
					else if(idx > 2) {
						prc_skl($(".skl:last").val(val), Ary[0]);
						skl += val + "　";
					}
				}
			});
		}
		$("#" + Grp["fsn"] + "b").text(txt + skl);
	}

	function cln_fsn() {
		var bdy = $(".z_fsn:last").clone(true);
		var num = parseInt($(bdy).attr("data-num")) + 1;
		bdy.attr("data-num", num);
		bdy.find(".b_lbl").text("セット" + num);
		bdy.find(".z_acp").attr("id", "fs" + num);
		bdy.find(".brk").attr("id", "fs" + num + "b");
		bdy.find(".fs" + (num - 1)).attr("class", "fs" + num);
		bdy.insertAfter($(".z_fsn:last"));

		bdy = $(".z_fsn:first");
		bdy.attr("class", "b_fsn").find(".z_acp").attr("class", "fsn");
		set_acp_fsn(bdy.find(".fsn"));

		$(".b_fsn").find(".b_lbl").each(function(idx) {
			$(this).text("セット" + (idx + 1));
		});
	}

	function del_fsn() {
		var flg;
		var tal;
		var Rmv_fsn = [[],[],];
		[...new Set(Cor_fsn[2])].forEach(function(arg) {
			if(arg !== "self") {
				flg = 0;
				$($("[type=text]:visible").not(".opt, .fsn, .skl, .z_acp").get().reverse()).each(function() {
					if($(this).val() === arg) {
						flg = 1;
						return false;
					}
				});
				if(flg === 0) {
					tal = Cor_fsn[2].length - 1;
					Cor_fsn[2].slice().reverse().forEach(function(val, idx) {
						if(val === arg) {
							Rmv_fsn[0].push(Cor_fsn[0][tal - idx]);
							Rmv_fsn[1].push(Cor_fsn[1][tal - idx]);
							Cor_fsn[0].splice(tal - idx, 1);
							Cor_fsn[1].splice(tal - idx, 1);
							Cor_fsn[2].splice(tal - idx, 1);
							Cor_fsn[3].splice(tal - idx, 1);
						}
					});
				}
			}
		});

		flg = 0;
		Rmv_fsn[0].forEach(function(val, idx) {
			if(!Cor_fsn[0].includes(val)) {
				prc_fsn($("#" + Rmv_fsn[1][idx]).val(""), "");
				flg = 1;
			}
		});

		if(flg === 0) {
			return true;
		}
		else {
			return false;
		}
	}

	//mst
	$(".mst").autocomplete( {
		source: Lst_mst,
		autoFocus: true,
		minLength: 0,
		close: function() {
			prc_mst(this);
		},
	}).focusin(function() {
		$(this).autocomplete("search", "");
	}).click(function() {
		$(this).autocomplete("search", "");
	});

	function prc_mst(tgt) {
		Grp["mst"] = $(tgt).attr("id");
		Pnt["mst"] = Grp["mst"].slice(2);

		Idv_mst[Pnt["mst"]] = Dat_mst.find(val => val[0] === $(tgt).val());
		if(Idv_mst[Pnt["mst"]] === undefined) Idv_mst[Pnt["mst"]] = [];

		clc_mst();
		clc_all();
	}

	function clc_mst() {
		if(Idv_mst !== undefined) {
			Idv_mst.map(function(val, idx) {
				if(Idv_mst[Pnt["mst"]][2] !== undefined) {
					$("#" + Grp["mst"] + "b").text(Idv_mst[Pnt["mst"]][2]);
				}
				else {
					$("#" + Grp["mst"] + "b").text("");
				}
			});
		}
	}

	//skl
	function set_acp_skl(tgt, sys) { 
		tgt.autocomplete( {
			source: Lst_skl[sys],
			autoFocus: true,
			minLength: 0,
			close: function() {
				prc_skl(this, "self");
				del_skl();
			},
		}).focusin(function() {
			$(this).autocomplete("search", "");
		}).click(function() {
			$(this).autocomplete("search", "");
		});
	};

	function prc_skl(tgt, org) {
		var flg;

		Grp["skl"] = $(tgt).attr("id");
		if(Grp["skl"] !== undefined) {
			Pnt["skl"] = Grp["skl"].slice(2);
			flg = 0;

			Idv_skl[Pnt["skl"]] = Dat_skl.find(val => val[0] === $(tgt).val());
			if(Idv_skl[Pnt["skl"]] === undefined) Idv_skl[Pnt["skl"]] = [];

			if(Idv_skl[Pnt["skl"]].length !== 0) {
				flg = 1;
				if(Cor_skl[0].includes(Idv_skl[Pnt["skl"]][0])) flg = 2;

				if(!Cor_skl[3].includes(Idv_skl[Pnt["skl"]][0] + "/" + org)) {
					Cor_skl[0].push(Idv_skl[Pnt["skl"]][0]);
					Cor_skl[2].push(org);
					Cor_skl[3].push(Idv_skl[Pnt["skl"]][0] + "/" + org);
					if(flg !== 2)	Cor_skl[1].push(Grp["skl"]);
					else 		Cor_skl[1].push(Cor_skl[1][Cor_skl[0].indexOf(Idv_skl[Pnt["skl"]][0])]);
				}
			}

			if(flg === 2) {
				if(org === "self") {
					//該当するセルに色塗るかなんか
				}
				else {
					Idv_skl[Pnt["skl"]] = [];
					$(tgt).val("");
				}
			}
			else if(org === "self" && flg === 0) {
				var tal = Cor_skl[2].length - 1;
				Cor_skl[2].slice().reverse().forEach(function(val, idx) {
					if(val === org) {
						Cor_skl[0].splice(tal - idx, 1);
						Cor_skl[1].splice(tal - idx, 1);
						Cor_skl[2].splice(tal - idx, 1);
						Cor_skl[3].splice(tal - idx, 1);
					}
				});
			}
		}

		clc_skl();
		clc_all();

		$(".skl").each(function() {
			if($(this).val().length == 0) $(this).closest(".b_skl").remove();
		});
		cln_skl();
	}

	function clc_skl() {
		if(Idv_skl !== undefined) {
			Idv_skl.map(function(val, idx) {
				if(Idv_skl[Pnt["skl"]][2] !== undefined) {
					$("#" + Grp["skl"] + "b").text(Idv_skl[Pnt["skl"]][2]);
				}
				else {
					$("#" + Grp["skl"] + "b").text("");
				}
			});
		}
	}

	function cln_skl() {
		var bdy = $(".z_skl:last").clone(true);
		var num = parseInt($(bdy).attr("data-num")) + 1;
		bdy.attr("data-num", num);
		bdy.find(".b_lbl").text("スキル" + num);
		bdy.find(".z_acp").attr("id", "sk" + num);
		bdy.find(".brk").attr("id", "sk" + num + "b");
		bdy.find(".sk" + (num - 1)).attr("class", "sk" + num);
		bdy.insertAfter($(".z_skl:last"));

		bdy = $(".z_skl:first");
		bdy.attr("class", "b_skl").find(".z_acp").attr("class", "skl");
		set_acp_skl(bdy.find(".skl"), 0);

		$(".b_skl").find(".b_lbl").each(function(idx) {
			$(this).text("スキル" + (idx + 1));
		});
	}

	function del_skl() {
		var flg;
		var tal;
		var Rmv_skl = [[],[],];
		[...new Set(Cor_skl[2])].forEach(function(arg) {
			if(arg !== "self") {
				flg = 0;
				$($("[type=text]:visible").not(".opt, .skl, .z_acp").get().reverse()).each(function() {
					if($(this).val() === arg) {
						flg = 1;
						return false;
					}
				});
				if(flg === 0) {
					tal = Cor_skl[2].length - 1;
					Cor_skl[2].slice().reverse().forEach(function(val, idx) {
						if(val === arg) {
							Rmv_skl[0].push(Cor_skl[0][tal - idx]);
							Rmv_skl[1].push(Cor_skl[1][tal - idx]);
							Cor_skl[0].splice(tal - idx, 1);
							Cor_skl[1].splice(tal - idx, 1);
							Cor_skl[2].splice(tal - idx, 1);
							Cor_skl[3].splice(tal - idx, 1);
						}
					});
				}
			}
		});

		flg = 0;
		Rmv_skl[0].forEach(function(val, idx) {
			if(!Cor_skl[0].includes(val)) {
				prc_skl($("#" + Rmv_skl[1][idx]).val(""), "");
				flg = 1;
			}
		});

		if(flg === 0) {
			return true;
		}
		else {
			return false;
		}
	}

	function clc_all() {
		var Sum_amm = [[],[]];
		var Sum_all = [];
		var Mag_all = [];

		Sum_opt.map(function(arg, sfx) {
			if(Sum_amm[sfx] === undefined) {
				Sum_amm[sfx] = [];
			}
			arg.map(function(val, idx) {
				val *= 1 + ((Mag_opt[sfx] === undefined) ? 0 : Mag_opt[sfx]) + ((Mag_aka[sfx] === undefined) ? 0 : Mag_aka[sfx]);
				Sum_amm[sfx][idx] = isNaN(Sum_amm[sfx][idx]) ? val : (Sum_amm[sfx][idx] + val);
			});
		});
		Idv_aka.map(function(arg, sfx) {
			if(Sum_amm[sfx] === undefined) {
				Sum_amm[sfx] = [];
			}
			arg.map(function(val, idx) {
				val *= ((Mag_opt[sfx] === undefined) ? 0 : Mag_opt[sfx]) + ((Mag_aka[sfx] === undefined) ? 0 : Mag_aka[sfx]);
				Sum_amm[sfx][idx] = isNaN(Sum_amm[sfx][idx]) ? val : (Sum_amm[sfx][idx] + val);
			});
		});
		Idv_eqp.map(function(arg, sfx) {
			if(Sum_amm[sfx] === undefined) {
				Sum_amm[sfx] = [];
			}
			arg.map(function(val, idx) {
				val *= 1 + ((Mag_opt[sfx] === undefined) ? 0 : Mag_opt[sfx]) + ((Mag_aka[sfx] === undefined) ? 0 : Mag_aka[sfx]);
				Sum_amm[sfx][idx] = isNaN(Sum_amm[sfx][idx]) ? val : (Sum_amm[sfx][idx] + val);
			});
		});

		Idv_fsn.map(function(arg, sfx) {
			arg.map(function(val, idx) {
				if(idx > 30 && val !== undefined) {
					Sum_all[idx] = isNaN(Sum_all[idx]) ? val : (Sum_all[idx] + val);
				}
			});
		});

		if(Idv_rac !== undefined) {
			Idv_rac.map(function(val, idx) {
				if(idx > 30 && val !== undefined) {
					Sum_all[idx] = isNaN(Sum_all[idx]) ? val : (Sum_all[idx] + val);
				}
			});
		}

		if(Idv_job[1] !== undefined) {
			Idv_job[1].map(function(val, idx) {
				if(idx > 30 && val !== undefined) {
					Sum_all[idx] = isNaN(Sum_all[idx]) ? val : (Sum_all[idx] + val);
				}
			});
		}

		Idv_ttl.map(function(arg, sfx) {
			arg.map(function(val, idx) {
				if(idx > 30 && val !== undefined) {
					Sum_all[idx] = isNaN(Sum_all[idx]) ? val : (Sum_all[idx] + val);
				}
			});
		});

		rst_skl = "_";
		var Spp = [];
		var Eqp_cnt = [1, 1, 1, 1, 1, 1, 3];
		Idv_mst.concat(Idv_skl).map(function(arg, sfx) {
			arg.map(function(val, idx) {
				if(idx > 30 && val !== undefined) {
					if(idx === 127) {
						rst_skl += val + "_";
						rst_wpn();
					}
					else if(idx === 128) {
						//武器属性 += ", " + val;
					}
					else if(idx === 129) {
						Spp[val] = 1;
					}
					else if(idx === 130) {
						if	(val === 1) {
							//暗器使い
							Eqp_cnt[0] += 2;
							Eqp_cnt[1] -= 1;
							Eqp_cnt[6] -= 3;
							rst_job = "_";
							rst_skl += 1 + "_";
							rst_wpn();
						}
						else if	(val === 2) {
							//両手盾
							Eqp_cnt[0] -= 1;
							Eqp_cnt[1] += 1;
						}
						else if	(val === 3) {
							//過剰装飾
							Eqp_cnt[0] -= 1;
							Eqp_cnt[1] -= 1;
							Eqp_cnt[6] += 2;
						}
						else if	(val === 4) {
							//器用貧乏
							Eqp_cnt[6] += 1;
						}
						else if	(val === 5) {
							//半竜の大角
							Eqp_cnt[2] -= 1;
						}
					}
					else if(Math.abs(val) < 0.001) {
						val *= 1000000;
						Mag_all[idx] = isNaN(Mag_all[idx]) ? val : (Mag_all[idx] + val);
					}
					else {
						Sum_all[idx] = isNaN(Sum_all[idx]) ? val : (Sum_all[idx] + val);
					}
				}
			});
		});

		var dif;
		var flg = 0;
		var i;
		Eqp_cnt.forEach(function(arg, sfx) {
			if((dif = arg - Eqp_log[sfx]) !== 0) {
				flg = 1;
				if(dif > 0) {
					i = Eqp_log[sfx] + 1;
					for(Eqp_log[sfx] = arg; i <= arg; i++) {
						$("#" + Asn[sfx] + i).show();
						Grp["amm"] = Asn[sfx] + i;
						cln_skl();
						clc_amm();
					}
				}
				else {
					for(i = arg + 1; i <= Eqp_log[sfx]; i++) {
						$("#" + Asn[sfx] + i).hide();
					}
					Eqp_log[sfx] = arg;
					if(!del_skl()) {
						return;
					}
				}
			}
			else {
				for(i = 1; i <= arg; i++) {
					if(Sum_amm[Asn[Asn[sfx] + i]] !== undefined) {
						Sum_amm[Asn[Asn[sfx] + i]].forEach(function(val, idx) {
							Sum_all[idx] = isNaN(Sum_all[idx]) ? val : (Sum_all[idx] + val);
						});
					}
				}
			}
		});
		if(flg !== 0) {
			clc_all();
			return;
		}

		Spp.forEach(function(val, idx) {
			if	(idx === 1) {
				//暗器使い
				for(i = 0; i <= 2; i++) {
					if(Sum_amm[i] !== undefined) {
						Sum_amm[i].forEach(function(val, idx) {
							if(idx !== 54 && (idx < 77 || 89 < idx) && idx !== 52) val /= 2;
							else { val = 0; }
							Sum_all[idx] = isNaN(Sum_all[idx]) ? -1 * val : (Sum_all[idx] - val);
						});
					}
				}
			}
			else if	(idx === 2) {
				//ウォークライ
				var hat = Math.max(0, Math.min((((isNaN(Sum_all[106]) ? 0 : Sum_all[106]) + 100) / 10), 100));
				Mag_all[33] = isNaN(Mag_all[33]) ? hat : (Mag_all[33] + hat);
				Mag_all[35] = isNaN(Mag_all[35]) ? hat : (Mag_all[35] + hat);
			}
			else if	(idx === 3) {
				//根源との接触
				
			}
		});

		var pct;
		var mag;
		var tmp;
		txt = "";
		$(".r_sts").hide();
		$(".t_val").text("");
		$(".t_pct").text("");
		$(".t_mag").text("");
		Sum_all.map(function(val, idx) {
			if(idx > 30 && val !== undefined) {
				tmp = "";
				pct = "";
				mag = "";
				const clc_reg = {
					0: function() { return (Math.abs(val) / 2); },
					1: function() { return (Math.abs(val) - 100) / 4 + 50; },
					2: function() { return (Math.abs(val) - 200) / 8 + 75; },
					3: function() { return (Math.abs(val) - 300) / 16 + 87.5; },
					4: function() { return (Math.abs(val) - 400) / 32 + 93.75; },
					5: function() { return 99; },
				}
				if	(idx <= 38) {
					tmp = parseInt((Idv_rac[idx] !== undefined) ? Idv_rac[idx] : 0);
					tmp += parseInt((Idv_job[1] !== undefined && Idv_job[1][idx] !== undefined) ? Idv_job[1][idx] : 0);
					tmp *= parseInt((Sum_all[121] !== undefined) ? Sum_all[121] : 0) / 100;
					mag = (100 + ((Mag_all[idx] === undefined) ? 0 : Mag_all[idx])) / 100;
					val = Math.max(Math.round((val +  tmp) * mag), 1);
					mag = "(x" + mag.toFixed(2) + ")";
				}
				else if	(idx <= 39) {
					mag = (100 + ((Mag_all[idx] === undefined) ? 0 : Mag_all[idx])) / 100;
					val = Math.max(Math.floor(val * mag), 1);
					mag = "(x" + mag.toFixed(2) + ")";
				}
				else if	(idx <= 46) {
					val = ((val > 0) ? "+" : "") + val.toFixed(1);
					pct = "%";
				}
				else if	(idx <= 47) {
					val = ((val > 0) ? "+" + val.toFixed(1) : 0);
					pct = "%";
				}
				else if	(idx <= 50) {
					val = ((val > 0) ? "+" : "") + val.toFixed(1);
					pct = "%";
				}
				else if	(idx <= 51) {
					val = ((val > 0) ? "+" : "") + val.toFixed(1);
				}
				else if	(idx <= 52) {
					mag = "(" + ((val > 0) ? "+" : "") + val.toFixed(1) + ")";
					val = ((val > 0) ? "+" : "-") + (Math.floor(clc_reg[Math.floor(Math.abs(((Math.abs(val) < 600) ? val : 500)/100))]() * 10) / 10).toFixed(1);
					pct = "%";
				}
				else if	(idx <= 53) {
					mag = (100 + ((Mag_all[idx] === undefined) ? 0 : Mag_all[idx])) / 100;
					val = (((val * mag) > 0) ? "+" : "") + (val * mag).toFixed(1);
					if(mag !== 1)	mag = "(x" + mag.toFixed(2) + ")";
					else		mag = "";
					pct = "%";
				}
				else if	(idx <= 55) {
					val = ((val > 0) ? "+" : "") + val.toFixed(1);
				}
				else if	(idx <= 64) {
					val = ((val > 0) ? "+" : "") + val.toFixed(1);
					pct = "%";
				}
				else if	(idx <= 75) {
					mag = (100 + ((Mag_all[idx] === undefined) ? 0 : Mag_all[idx])) / 100;
					tmp = (val * mag).toFixed(1);
					mag = "(" + ((tmp > 0) ? "+" : "") + tmp + ")";
					val = ((val > 0) ? "+" : "-") + (Math.floor(clc_reg[Math.floor(Math.abs(((Math.abs(tmp) < 600) ? tmp : 500)/100))]() * 10) / 10).toFixed(1);
					pct = "%";
				}
				else if	(idx <= 76) {
					if(val > 100000) val = "無効";
					else {
						mag = "(" + ((val > 0) ? "+" : "") + val.toFixed(1) + ")";
						val = ((val > 0) ? "+" : "-") + (Math.floor(clc_reg[Math.floor(Math.abs(((Math.abs(val) < 600) ? val : 500)/100))]() * 10) / 10).toFixed(1);
						pct = "%";
					}
				}
				else if	(idx <= 88) {
					mag = (100 + ((Mag_all[idx] === undefined) ? 0 : Mag_all[idx])) / 100;
					tmp = (val * mag).toFixed(1);
					mag = "(" + ((val > 0) ? "+" : "") + tmp + ")";
					val = ((val > 0) ? "+" : "-") + (Math.floor(clc_reg[Math.floor(Math.abs(((Math.abs(tmp) < 600) ? tmp : 500)/100))]() * 10) / 10).toFixed(1);
					pct = "%";
				}
				else if	(idx <= 89) {
					mag = (100 + ((Mag_all[idx] === undefined) ? 0 : Mag_all[idx])) / 100;
					val = (((val * mag) > 0) ? "+" : "") + (val * mag).toFixed(1);
					pct = "%";
					if(mag !== 1)	mag = "(x" + mag.toFixed(2) + ")";
					else		mag = "";
				}
				else if	(idx <= 100) {
					if(val > 100000) val = "無効";
					else {
						mag = "(" + ((val > 0) ? "+" : "") + val.toFixed(1) + ")";
						val = ((val > 0) ? "+" : "-") + (Math.floor(clc_reg[Math.floor(Math.abs(((Math.abs(val) < 600) ? val : 500)/100))]() * 10) / 10).toFixed(1);
						pct = "%";
					}
				}
				else if	(idx <= 101) {
					val = ((val > 0) ? "+" : "") + val.toFixed(1);
					pct = "%";
				}
				else if	(idx <= 102) {
					mag = (100 + ((Mag_all[idx] === undefined) ? 0 : Mag_all[idx])) / 100;
					val = (((val * mag) > 0) ? "+" : "") + (val * mag).toFixed(1);
					if(mag !== 1)	mag = "(x" + mag.toFixed(2) + ")";
					else		mag = "";
				}
				else if	(idx <= 104) {
					val = ((val > 0) ? "+" : "") + val.toFixed(1);
					pct = "%";
				}
				else if	(idx <= 106) {
					val = ((val > 0) ? "+" : "") + val.toFixed(1);
				}
				else if	(idx <= 107) {
					mag = (100 + ((Mag_all[idx] === undefined) ? 0 : Mag_all[idx])) / 100;
					val = (((val * mag) > 0) ? "+" : "") + (val * mag).toFixed(1);
					if(mag !== 1)	mag = "(x" + mag.toFixed(2) + ")";
					else		mag = "";
					pct = "%";
				}
				else if	(idx <= 126) {
					val = ((val > 0) ? "+" : "") + val.toFixed(1);
					pct = "%";
				}

				if(val != 0) {
					$("#as" + idx + "v").text(val);
					$("#as" + idx + "p").text(pct);
					$("#as" + idx + "m").text(mag);
					$("#as" + idx).show();
				}
			}
		});
	}
});
