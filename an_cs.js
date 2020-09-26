<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>アルテスノート - キャラシミュレータ</title>
		<link rel="stylesheet" href="jquery-ui.css">
		<link rel="stylesheet" media="screen and (max-width:980px)" href="an_csm.css">
		<link rel="stylesheet" media="screen and (min-width:981px)" href="an_csp.css">
	</head>
	<body>
		<div class="p_flx">
		<div>
			<div class="d_btn">
					<button type="button" id="tg1" class="tgl_e">詳細表示</button>
					<button type="button" id="tg2" class="tgl_s">ステータス表示</button>
					<button type="button" id="tg3" class="tgl_m">極意スキル欄表示</button>
					<button type="button" id="tg6" class="tgl_e">装備制限解除</button>
			</div>

			<table class="t_amm">
				<thead>
					<tr>
						<th>装備箇所</th>
						<th colspan="2">
							<div class="a_flx">
								<span>オプション1</span>
								<span>オプション2</span>
								<span>オプション3</span>
							</div>
							<div class="p_flx">
								<div>二つ名</div>
								<div>アイテム</div>
							</div>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr class="wp1">
						<td rowspan="4" class="b_lbl">武器</td>
						<td colspan="2" class="b_amm">
							<div class="a_flx">
								<div class="d_tie">
									<input type="text" id="wp1o1" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="wp1o2" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="wp1o3" class="opt">
									<div class="clr">×</div>
								</div>
							</div>
							<div class="p_flx">
								<div class="d_aka">
									<div class="d_tie">
										<input type="text" id="wp1a" class="aka">
										<div class="clr">×</div>
									</div>
								</div>
								<div class="d_eqp">
									<div class="d_tie">
										<input type="text" id="wp1e" class="eqp" data-sys="0">
										<div class="clr">×</div>
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr class="wp1">
						<td class="inf"><基本情報></td>
						<td id="wp1be" class="brk"></td>
					</tr>
					<tr class="wp1">
						<td class="inf"><オプション></td>
						<td id="wp1bo" class="brk"></td>
					</tr>
					<tr class="wp1">
						<td class="inf"><二つ名></td>
						<td id="wp1ba" class="brk"></td>
					</tr>
				</tbody>
				<tbody>
					<tr class="wp2">
						<td rowspan="4" class="b_lbl">武器2</td>
						<td colspan="2" class="b_amm">
							<div class="a_flx">
								<div class="d_tie">
									<input type="text" id="wp2o1" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="wp2o2" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="wp2o3" class="opt">
									<div class="clr">×</div>
								</div>
							</div>
							<div class="p_flx">
								<div class="d_aka">
									<div class="d_tie">
										<input type="text" id="wp2a" class="aka">
										<div class="clr">×</div>
									</div>
								</div>
								<div class="d_eqp">
									<div class="d_tie">
										<input type="text" id="wp2e" class="eqp" data-sys="0">
										<div class="clr">×</div>
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr class="wp2">
						<td class="inf"><基本情報></td>
						<td id="wp2be" class="brk"></td>
					</tr>
					<tr class="wp2">
						<td class="inf"><オプション></td>
						<td id="wp2bo" class="brk"></td>
					</tr>
					<tr class="wp2">
						<td class="inf"><二つ名></td>
						<td id="wp2ba" class="brk"></td>
					</tr>
				</tbody>
				<tbody>
					<tr class="wp3">
						<td rowspan="4" class="b_lbl">武器3</td>
						<td colspan="2" class="b_amm">
							<div class="a_flx">
								<div class="d_tie">
									<input type="text" id="wp3o1" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="wp3o2" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="wp3o3" class="opt">
									<div class="clr">×</div>
								</div>
							</div>
							<div class="p_flx">
								<div class="d_aka">
									<div class="d_tie">
										<input type="text" id="wp3a" class="aka">
										<div class="clr">×</div>
									</div>
								</div>
								<div class="d_eqp">
									<div class="d_tie">
										<input type="text" id="wp3e" class="eqp" data-sys="0">
										<div class="clr">×</div>
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr class="wp3">
						<td class="inf"><基本情報></td>
						<td id="wp3be" class="brk"></td>
					</tr>
					<tr class="wp3">
						<td class="inf"><オプション></td>
						<td id="wp3bo" class="brk"></td>
					</tr>
					<tr class="wp3">
						<td class="inf"><二つ名></td>
						<td id="wp3ba" class="brk"></td>
					</tr>
				</tbody>
				<tbody>
					<tr class="sh1">
						<td rowspan="4" class="b_lbl">盾</td>
						<td colspan="2" class="b_amm">
							<div class="a_flx">
								<div class="d_tie">
									<input type="text" id="sh1o1" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="sh1o2" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="sh1o3" class="opt">
									<div class="clr">×</div>
								</div>
							</div>
							<div class="p_flx">
								<div class="d_aka">
									<div class="d_tie">
										<input type="text" id="sh1a" class="aka">
										<div class="clr">×</div>
									</div>
								</div>
								<div class="d_eqp">
									<div class="d_tie">
										<input type="text" id="sh1e" class="eqp" data-sys="9">
										<div class="clr">×</div>
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr class="sh1">
						<td class="inf"><基本情報></td>
						<td id="sh1be" class="brk"></td>
					</tr>
					<tr class="sh1">
						<td class="inf"><オプション></td>
						<td id="sh1bo" class="brk"></td>
					</tr>
					<tr class="sh1">
						<td class="inf"><二つ名></td>
						<td id="sh1ba" class="brk"></td>
					</tr>
				</tbody>
				<tbody>
					<tr class="sh2">
						<td rowspan="4" class="b_lbl">盾2</td>
						<td colspan="2" class="b_amm">
							<div class="a_flx">
								<div class="d_tie">
									<input type="text" id="sh2o1" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="sh2o2" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="sh2o3" class="opt">
									<div class="clr">×</div>
								</div>
							</div>
							<div class="p_flx">
								<div class="d_aka">
									<div class="d_tie">
										<input type="text" id="sh2a" class="aka">
										<div class="clr">×</div>
									</div>
								</div>
								<div class="d_eqp">
									<div class="d_tie">
										<input type="text" id="sh2e" class="eqp" data-sys="9">
										<div class="clr">×</div>
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr class="sh2">
						<td class="inf"><基本情報></td>
						<td id="sh2be" class="brk"></td>
					</tr>
					<tr class="sh2">
						<td class="inf"><オプション></td>
						<td id="sh2bo" class="brk"></td>
					</tr>
					<tr class="sh2">
						<td class="inf"><二つ名></td>
						<td id="sh2ba" class="brk"></td>
					</tr>
				</tbody>
				<tbody>
					<tr class="hd1">
						<td rowspan="4" class="b_lbl">頭</td>
						<td colspan="2" class="b_amm">
							<div class="a_flx">
								<div class="d_tie">
									<input type="text" id="hd1o1" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="hd1o2" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="hd1o3" class="opt">
									<div class="clr">×</div>
								</div>
							</div>
							<div class="p_flx">
								<div class="d_aka">
									<div class="d_tie">
										<input type="text" id="hd1a" class="aka">
										<div class="clr">×</div>
									</div>
								</div>
								<div class="d_eqp">
									<div class="d_tie">
										<input type="text" id="hd1e" class="eqp" data-sys="10">
										<div class="clr">×</div>
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr class="hd1">
						<td class="inf"><基本情報></td>
						<td id="hd1be" class="brk"></td>
					</tr>
					<tr class="hd1">
						<td class="inf"><オプション></td>
						<td id="hd1bo" class="brk"></td>
					</tr>
					<tr class="hd1">
						<td class="inf"><二つ名></td>
						<td id="hd1ba" class="brk"></td>
					</tr>
				</tbody>
				<tbody>
					<tr class="bd1">
						<td rowspan="4" class="b_lbl">鎧</td>
						<td colspan="2" class="b_amm">
							<div class="a_flx">
								<div class="d_tie">
									<input type="text" id="bd1o1" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="bd1o2" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="bd1o3" class="opt">
									<div class="clr">×</div>
								</div>
							</div>
							<div class="p_flx">
								<div class="d_aka">
									<div class="d_tie">
										<input type="text" id="bd1a" class="aka">
										<div class="clr">×</div>
									</div>
								</div>
								<div class="d_eqp">
									<div class="d_tie">
										<input type="text" id="bd1e" class="eqp" data-sys="11">
										<div class="clr">×</div>
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr class="bd1">
						<td class="inf"><基本情報></td>
						<td id="bd1be" class="brk"></td>
					</tr>
					<tr class="bd1">
						<td class="inf"><オプション></td>
						<td id="bd1bo" class="brk"></td>
					</tr>
					<tr class="bd1">
						<td class="inf"><二つ名></td>
						<td id="bd1ba" class="brk"></td>
					</tr>
				</tbody>
				<tbody>
					<tr class="am1">
						<td rowspan="4" class="b_lbl">手</td>
						<td colspan="2" class="b_amm">
							<div class="a_flx">
								<div class="d_tie">
									<input type="text" id="am1o1" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="am1o2" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="am1o3" class="opt">
									<div class="clr">×</div>
								</div>
							</div>
							<div class="p_flx">
								<div class="d_aka">
									<div class="d_tie">
										<input type="text" id="am1a" class="aka">
										<div class="clr">×</div>
									</div>
								</div>
								<div class="d_eqp">
									<div class="d_tie">
										<input type="text" id="am1e" class="eqp" data-sys="12">
										<div class="clr">×</div>
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr class="am1">
						<td class="inf"><基本情報></td>
						<td id="am1be" class="brk"></td>
					</tr>
					<tr class="am1">
						<td class="inf"><オプション></td>
						<td id="am1bo" class="brk"></td>
					</tr>
					<tr class="am1">
						<td class="inf"><二つ名></td>
						<td id="am1ba" class="brk"></td>
					</tr>
				</tbody>
				<tbody>
					<tr class="lg1">
						<td rowspan="4" class="b_lbl">脚</td>
						<td colspan="2" class="b_amm">
							<div class="a_flx">
								<div class="d_tie">
									<input type="text" id="lg1o1" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="lg1o2" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="lg1o3" class="opt">
									<div class="clr">×</div>
								</div>
							</div>
							<div class="p_flx">
								<div class="d_aka">
									<div class="d_tie">
										<input type="text" id="lg1a" class="aka">
										<div class="clr">×</div>
									</div>
								</div>
								<div class="d_eqp">
									<div class="d_tie">
										<input type="text" id="lg1e" class="eqp" data-sys="13">
										<div class="clr">×</div>
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr class="lg1">
						<td class="inf"><基本情報></td>
						<td id="lg1be" class="brk"></td>
					</tr>
					<tr class="lg1">
						<td class="inf"><オプション></td>
						<td id="lg1bo" class="brk"></td>
					</tr>
					<tr class="lg1">
						<td class="inf"><二つ名></td>
						<td id="lg1ba" class="brk"></td>
					</tr>
				</tbody>
				<tbody>
					<tr class="ac1">
						<td rowspan="4" class="b_lbl">その他1</td>
						<td colspan="2" class="b_amm">
							<div class="a_flx">
								<div class="d_tie">
									<input type="text" id="ac1o1" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="ac1o2" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="ac1o3" class="opt">
									<div class="clr">×</div>
								</div>
							</div>
							<div class="p_flx">
								<div class="d_aka">
									<div class="d_tie">
										<input type="text" id="ac1a" class="aka">
										<div class="clr">×</div>
									</div>
								</div>
								<div class="d_eqp">
									<div class="d_tie">
										<input type="text" id="ac1e" class="eqp" data-sys="14">
										<div class="clr">×</div>
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr class="ac1">
						<td class="inf"><基本情報></td>
						<td id="ac1be" class="brk"></td>
					</tr>
					<tr class="ac1">
						<td class="inf"><オプション></td>
						<td id="ac1bo" class="brk"></td>
					</tr>
					<tr class="ac1">
						<td class="inf"><二つ名></td>
						<td id="ac1ba" class="brk"></td>
					</tr>
				</tbody>
				<tbody>
					<tr class="ac2">
						<td rowspan="4" class="b_lbl">その他2</td>
						<td colspan="2" class="b_amm">
							<div class="a_flx">
								<div class="d_tie">
									<input type="text" id="ac2o1" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="ac2o2" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="ac2o3" class="opt">
									<div class="clr">×</div>
								</div>
							</div>
							<div class="p_flx">
								<div class="d_aka">
									<div class="d_tie">
										<input type="text" id="ac2a" class="aka">
										<div class="clr">×</div>
									</div>
								</div>
								<div class="d_eqp">
									<div class="d_tie">
										<input type="text" id="ac2e" class="eqp" data-sys="14">
										<div class="clr">×</div>
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr class="ac2">
						<td class="inf"><基本情報></td>
						<td id="ac2be" class="brk"></td>
					</tr>
					<tr class="ac2">
						<td class="inf"><オプション></td>
						<td id="ac2bo" class="brk"></td>
					</tr>
					<tr class="ac2">
						<td class="inf"><二つ名></td>
						<td id="ac2ba" class="brk"></td>
					</tr>
				</tbody>
				<tbody>
					<tr class="ac3">
						<td rowspan="4" class="b_lbl">その他3</td>
						<td colspan="2" class="b_amm">
							<div class="a_flx">
								<div class="d_tie">
									<input type="text" id="ac3o1" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="ac3o2" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="ac3o3" class="opt">
									<div class="clr">×</div>
								</div>
							</div>
							<div class="p_flx">
								<div class="d_aka">
									<div class="d_tie">
										<input type="text" id="ac3a" class="aka">
										<div class="clr">×</div>
									</div>
								</div>
								<div class="d_eqp">
									<div class="d_tie">
										<input type="text" id="ac3e" class="eqp" data-sys="14">
										<div class="clr">×</div>
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr class="ac3">
						<td class="inf"><基本情報></td>
						<td id="ac3be" class="brk"></td>
					</tr>
					<tr class="ac3">
						<td class="inf"><オプション></td>
						<td id="ac3bo" class="brk"></td>
					</tr>
					<tr class="ac3">
						<td class="inf"><二つ名></td>
						<td id="ac3ba" class="brk"></td>
					</tr>
				</tbody>
				<tbody>
					<tr class="ac4">
						<td rowspan="4" class="b_lbl">その他4</td>
						<td colspan="2" class="b_amm">
							<div class="a_flx">
								<div class="d_tie">
									<input type="text" id="ac4o1" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="ac4o2" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="ac4o3" class="opt">
									<div class="clr">×</div>
								</div>
							</div>
							<div class="p_flx">
								<div class="d_aka">
									<div class="d_tie">
										<input type="text" id="ac4a" class="aka">
										<div class="clr">×</div>
									</div>
								</div>
								<div class="d_eqp">
									<div class="d_tie">
										<input type="text" id="ac4e" class="eqp" data-sys="14">
										<div class="clr">×</div>
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr class="ac4">
						<td class="inf"><基本情報></td>
						<td id="ac4be" class="brk"></td>
					</tr>
					<tr class="ac4">
						<td class="inf"><オプション></td>
						<td id="ac4bo" class="brk"></td>
					</tr>
					<tr class="ac4">
						<td class="inf"><二つ名></td>
						<td id="ac4ba" class="brk"></td>
					</tr>
				</tbody>
				<tbody>
					<tr class="ac5">
						<td rowspan="4" class="b_lbl">その他5</td>
						<td colspan="2" class="b_amm">
							<div class="a_flx">
								<div class="d_tie">
									<input type="text" id="ac5o1" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="ac5o2" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="ac5o3" class="opt">
									<div class="clr">×</div>
								</div>
							</div>
							<div class="p_flx">
								<div class="d_aka">
									<div class="d_tie">
										<input type="text" id="ac5a" class="aka">
										<div class="clr">×</div>
									</div>
								</div>
								<div class="d_eqp">
									<div class="d_tie">
										<input type="text" id="ac5e" class="eqp" data-sys="14">
										<div class="clr">×</div>
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr class="ac5">
						<td class="inf"><基本情報></td>
						<td id="ac5be" class="brk"></td>
					</tr>
					<tr class="ac5">
						<td class="inf"><オプション></td>
						<td id="ac5bo" class="brk"></td>
					</tr>
					<tr class="ac5">
						<td class="inf"><二つ名></td>
						<td id="ac5ba" class="brk"></td>
					</tr>
				</tbody>
				<tbody>
					<tr class="ac6">
						<td rowspan="4" class="b_lbl">その他6</td>
						<td colspan="2" class="b_amm">
							<div class="a_flx">
								<div class="d_tie">
									<input type="text" id="ac6o1" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="ac6o2" class="opt">
									<div class="clr">×</div>
								</div>
								<div class="d_tie">
									<input type="text" id="ac6o3" class="opt">
									<div class="clr">×</div>
								</div>
							</div>
							<div class="p_flx">
								<div class="d_aka">
									<div class="d_tie">
										<input type="text" id="ac6a" class="aka">
										<div class="clr">×</div>
									</div>
								</div>
								<div class="d_eqp">
									<div class="d_tie">
										<input type="text" id="ac6e" class="eqp" data-sys="14">
										<div class="clr">×</div>
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr class="ac6">
						<td class="inf"><基本情報></td>
						<td id="ac6be" class="brk"></td>
					</tr>
					<tr class="ac6">
						<td class="inf"><オプション></td>
						<td id="ac6bo" class="brk"></td>
					</tr>
					<tr class="ac6">
						<td class="inf"><二つ名></td>
						<td id="ac6ba" class="brk"></td>
					</tr>
				</tbody>
			</table>

			<table class="t_fsn">
				<thead>
					<tr><th colspan="2">共鳴効果</th></tr>
				</thead>
				<tbody class="b_fsn" data-num="1">
					<tr class="fs1">
						<td rowspan="2" class="b_lbl">セット1</td>
						<td>
							<div class="d_tie">
								<input type="text" id="fs1" class="fsn">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="fs1">
						<td id="fs1b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_fsn" data-num="2">
					<tr class="fs2">
						<td rowspan="2" class="b_lbl">セット2</td>
						<td>
							<div class="d_tie">
								<input type="text" id="fs2" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="fs2">
						<td id="fs2b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_fsn" data-num="3">
					<tr class="fs3">
						<td rowspan="2" class="b_lbl">セット3</td>
						<td>
							<div class="d_tie">
								<input type="text" id="fs3" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="fs3">
						<td id="fs3b" class="brk"></td>
					</tr>
				</tbody>
			</table>

			<table class="t_skl">
				<thead>
					<tr><th colspan="2">スキル</th></tr>
				</thead>
				<tbody class="b_mst">
					<tr class="ms1">
						<td rowspan="2" class="b_lbl">極意1</td>
						<td>
							<div class="d_tie">
								<input type="text" id="ms1" class="mst">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="ms1">
						<td id="ms1b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="b_mst">
					<tr class="ms2">
						<td rowspan="2" class="b_lbl">極意2</td>
						<td>
							<div class="d_tie">
								<input type="text" id="ms2" class="mst">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="ms2">
						<td id="ms2b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="b_mst">
					<tr class="ms3">
						<td rowspan="2" class="b_lbl">極意3</td>
						<td>
							<div class="d_tie">
								<input type="text" id="ms3" class="mst">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="ms3">
						<td id="ms3b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="b_mst">
					<tr class="ms4">
						<td rowspan="2" class="b_lbl">極意4</td>
						<td>
							<div class="d_tie">
								<input type="text" id="ms4" class="mst">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="ms4">
						<td id="ms4b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="b_mst">
					<tr class="ms5">
						<td rowspan="2" class="b_lbl">極意5</td>
						<td>
							<div class="d_tie">
								<input type="text" id="ms5" class="mst">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="ms5">
						<td id="ms5b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="b_mst">
					<tr class="ms6">
						<td rowspan="2" class="b_lbl">極意6</td>
						<td>
							<div class="d_tie">
								<input type="text" id="ms6" class="mst">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="ms6">
						<td id="ms6b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="b_mst">
					<tr class="ms7">
						<td rowspan="2" class="b_lbl">極意7</td>
						<td>
							<div class="d_tie">
								<input type="text" id="ms7" class="mst">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="ms7">
						<td id="ms7b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="b_mst">
					<tr class="ms8">
						<td rowspan="2" class="b_lbl">極意8</td>
						<td>
							<div class="d_tie">
								<input type="text" id="ms8" class="mst">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="ms8">
						<td id="ms8b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="b_mst">
					<tr class="ms9">
						<td rowspan="2" class="b_lbl">極意9</td>
						<td>
							<div class="d_tie">
								<input type="text" id="ms9" class="mst">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="ms9">
						<td id="ms9b" class="brk"></td>
					</tr>
				</tbody>

				<tbody class="b_skl" data-num="1">
					<tr class="sk1">
						<td rowspan="2" class="b_lbl">スキル1</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk1" class="skl">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk1">
						<td id="sk1b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="2">
					<tr class="sk2">
						<td rowspan="2" class="b_lbl">スキル2</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk2" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk2">
						<td id="sk2b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="3">
					<tr class="sk3">
						<td rowspan="2" class="b_lbl">スキル3</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk3" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk3">
						<td id="sk3b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="4">
					<tr class="sk4">
						<td rowspan="2" class="b_lbl">スキル4</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk4" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk4">
						<td id="sk4b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="5">
					<tr class="sk5">
						<td rowspan="2" class="b_lbl">スキル5</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk5" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk5">
						<td id="sk5b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="6">
					<tr class="sk6">
						<td rowspan="2" class="b_lbl">スキル6</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk6" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk6">
						<td id="sk6b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="7">
					<tr class="sk7">
						<td rowspan="2" class="b_lbl">スキル7</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk7" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk7">
						<td id="sk7b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="8">
					<tr class="sk8">
						<td rowspan="2" class="b_lbl">スキル8</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk8" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk8">
						<td id="sk8b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="9">
					<tr class="sk9">
						<td rowspan="2" class="b_lbl">スキル9</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk9" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk9">
						<td id="sk9b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="10">
					<tr class="sk10">
						<td rowspan="2" class="b_lbl">スキル10</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk10" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk10">
						<td id="sk10b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="11">
					<tr class="sk11">
						<td rowspan="2" class="b_lbl">スキル11</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk11" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk11">
						<td id="sk11b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="12">
					<tr class="sk12">
						<td rowspan="2" class="b_lbl">スキル12</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk12" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk12">
						<td id="sk12b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="13">
					<tr class="sk13">
						<td rowspan="2" class="b_lbl">スキル13</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk13" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk13">
						<td id="sk13b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="14">
					<tr class="sk14">
						<td rowspan="2" class="b_lbl">スキル14</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk14" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk14">
						<td id="sk14b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="15">
					<tr class="sk15">
						<td rowspan="2" class="b_lbl">スキル15</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk15" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk15">
						<td id="sk15b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="16">
					<tr class="sk16">
						<td rowspan="2" class="b_lbl">スキル16</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk16" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk16">
						<td id="sk16b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="17">
					<tr class="sk17">
						<td rowspan="2" class="b_lbl">スキル17</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk17" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk17">
						<td id="sk17b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="18">
					<tr class="sk18">
						<td rowspan="2" class="b_lbl">スキル18</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk18" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk18">
						<td id="sk18b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="19">
					<tr class="sk19">
						<td rowspan="2" class="b_lbl">スキル19</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk19" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk19">
						<td id="sk19b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="20">
					<tr class="sk20">
						<td rowspan="2" class="b_lbl">スキル20</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk20" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk20">
						<td id="sk20b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="21">
					<tr class="sk21">
						<td rowspan="2" class="b_lbl">スキル21</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk21" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk21">
						<td id="sk21b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="22">
					<tr class="sk22">
						<td rowspan="2" class="b_lbl">スキル22</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk22" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk22">
						<td id="sk22b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="23">
					<tr class="sk23">
						<td rowspan="2" class="b_lbl">スキル23</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk23" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk23">
						<td id="sk23b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="24">
					<tr class="sk24">
						<td rowspan="2" class="b_lbl">スキル24</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk24" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk24">
						<td id="sk24b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="25">
					<tr class="sk25">
						<td rowspan="2" class="b_lbl">スキル25</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk25" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk25">
						<td id="sk25b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="26">
					<tr class="sk26">
						<td rowspan="2" class="b_lbl">スキル26</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk26" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk26">
						<td id="sk26b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="27">
					<tr class="sk27">
						<td rowspan="2" class="b_lbl">スキル27</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk27" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk27">
						<td id="sk27b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="28">
					<tr class="sk28">
						<td rowspan="2" class="b_lbl">スキル28</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk28" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk28">
						<td id="sk28b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="29">
					<tr class="sk29">
						<td rowspan="2" class="b_lbl">スキル29</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk29" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk29">
						<td id="sk29b" class="brk"></td>
					</tr>
				</tbody>
				<tbody class="z_skl" data-num="30">
					<tr class="sk30">
						<td rowspan="2" class="b_lbl">スキル30</td>
						<td>
							<div class="d_tie">
								<input type="text" id="sk30" class="z_acp">
								<div class="clr">×</div>
							</div>
						</td>
					</tr>
					<tr class="sk30">
						<td id="sk30b" class="brk"></td>
					</tr>
				</tbody>
			</table>

			<div class="d_cls">
				<table class="t_cls">
					<thead>
						<tr>
							<th colspan="2">
								<div class="a_flx">
									<span class="spc">種族</span>
									<span>メインジョブ</span>
								</div>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colspan="2">
								<div class="a_flx">
									<div class="d_tie">
										<input type="text" id="rc1" class="rac">
										<div class="clr">×</div>
									</div>
									<div class="d_tie">
										<input type="text" id="jb1" class="job">
										<div class="clr">×</div>
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<td class="inf"><種族></td>
							<td id="rc1be" class="brk"></td>
						</tr>
						<tr>
							<td class="inf"><ジョブ></td>
							<td id="jb1be" class="brk"></td>
						</tr>
					</tbody>
				</table>
				<table class="t_cls">
					<thead>
						<tr>
							<th colspan="2">
								<div class="a_flx">
									<span>サブジョブ1</span>
									<span>サブジョブ2</span>
								</div>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colspan="2">
								<div class="a_flx">
									<div class="d_tie">
										<input type="text" id="jb2" class="job">
										<div class="clr">×</div>
									</div>
									<div class="d_tie">
										<input type="text" id="jb3" class="job">
										<div class="clr">×</div>
									</div>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
				<table class="t_ttl">
					<thead>
						<tr>
							<th colspan="2">
								<div class="a_flx">
									<span>二つ名(前半)</span>
									<span>二つ名(後半)</span>
								</div>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colspan="2">
								<div class="a_flx">
									<div class="d_tie">
										<input type="text" id="tt1" class="ttl">
										<div class="clr">×</div>
									</div>
									<div class="d_tie">
										<input type="text" id="tt2" class="ttl">
										<div class="clr">×</div>
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<td class="inf"><前半></td>
							<td id="tt1be" class="brk"></td>
						</tr>
						<tr>
							<td class="inf"><後半></td>
							<td id="tt2be" class="brk"></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div>
			<div class="d_rsl">
				<div class="d_hln">ステータス</div>
				<div class="d_aln">
					<table class="t_sts">
						<tbody>
							<tr>
								<td colspan="4" class="t_hed">能力値</td>
							</tr>
								<tr id="as31" class="r_sts">
									<td class="t_itm">HP</td>
									<td id="as31v" class="t_val"></td>
									<td id="as31p" class="t_pct"></td>
									<td id="as31m" class="t_mag"></td>
								</tr>
								<tr id="as32" class="r_sts">
									<td class="t_itm">攻撃力</td>
									<td id="as32v" class="t_val"></td>
									<td id="as32p" class="t_pct"></td>
									<td id="as32m" class="t_mag"></td>
								</tr>
								<tr id="as33" class="r_sts">
									<td class="t_itm">防御力</td>
									<td id="as33v" class="t_val"></td>
									<td id="as33p" class="t_pct"></td>
									<td id="as33m" class="t_mag"></td>
								</tr>
								<tr id="as34" class="r_sts">
									<td class="t_itm">魔力</td>
									<td id="as34v" class="t_val"></td>
									<td id="as34p" class="t_pct"></td>
									<td id="as34m" class="t_mag"></td>
								</tr>
								<tr id="as35" class="r_sts">
									<td class="t_itm">魔防</td>
									<td id="as35v" class="t_val"></td>
									<td id="as35p" class="t_pct"></td>
									<td id="as35m" class="t_mag"></td>
								</tr>
								<tr id="as36" class="r_sts">
									<td class="t_itm">命中</td>
									<td id="as36v" class="t_val"></td>
									<td id="as36p" class="t_pct"></td>
									<td id="as36m" class="t_mag"></td>
								</tr>
								<tr id="as37" class="r_sts">
									<td class="t_itm">回避</td>
									<td id="as37v" class="t_val"></td>
									<td id="as37p" class="t_pct"></td>
									<td id="as37m" class="t_mag"></td>
								</tr>
								<tr id="as38" class="r_sts">
									<td class="t_itm">行動速度</td>
									<td id="as38v" class="t_val"></td>
									<td id="as38p" class="t_pct"></td>
									<td id="as38m" class="t_mag"></td>
								</tr>
								<tr id="as39" class="r_sts">
									<td class="t_itm">攻撃回数</td>
									<td id="as39v" class="t_val"></td>
									<td id="as39p" class="t_pct"></td>
									<td id="as39m" class="t_mag"></td>
								</tr>
							<tr>
								<td colspan="4" class="t_hed">特攻</td>
							</tr>
								<tr id="as40" class="r_sts">
									<td class="t_itm">特攻：人型</td>
									<td id="as40v" class="t_val"></td>
									<td id="as40p" class="t_pct"></td>
									<td id="as40m" class="t_mag"></td>
								</tr>
								<tr id="as41" class="r_sts">
									<td class="t_itm">特攻：悪魔</td>
									<td id="as41v" class="t_val"></td>
									<td id="as41p" class="t_pct"></td>
									<td id="as41m" class="t_mag"></td>
								</tr>
								<tr id="as42" class="r_sts">
									<td class="t_itm">特攻：竜</td>
									<td id="as42v" class="t_val"></td>
									<td id="as42p" class="t_pct"></td>
									<td id="as42m" class="t_mag"></td>
								</tr>
								<tr id="as43" class="r_sts">
									<td class="t_itm">特攻：不死</td>
									<td id="as43v" class="t_val"></td>
									<td id="as43p" class="t_pct"></td>
									<td id="as43m" class="t_mag"></td>
								</tr>
								<tr id="as44" class="r_sts">
									<td class="t_itm">特攻：魔獣</td>
									<td id="as44v" class="t_val"></td>
									<td id="as44p" class="t_pct"></td>
									<td id="as44m" class="t_mag"></td>
								</tr>
								<tr id="as45" class="r_sts">
									<td class="t_itm">特攻：幻神</td>
									<td id="as45v" class="t_val"></td>
									<td id="as45p" class="t_pct"></td>
									<td id="as45m" class="t_mag"></td>
								</tr>
								<tr id="as46" class="r_sts">
									<td class="t_itm">特攻：機械</td>
									<td id="as46v" class="t_val"></td>
									<td id="as46p" class="t_pct"></td>
									<td id="as46m" class="t_mag"></td>
								</tr>
							<tr>
								<td colspan="4" class="t_hed">追加攻撃</td>
							</tr>
								<tr id="as47" class="r_sts">
									<td class="t_itm">致命打率</td>
									<td id="as47v" class="t_val"></td>
									<td id="as47p" class="t_pct"></td>
									<td id="as47m" class="t_mag"></td>
								</tr>
								<tr id="as48" class="r_sts">
									<td class="t_itm">威力：致命打</td>
									<td id="as48v" class="t_val"></td>
									<td id="as48p" class="t_pct"></td>
									<td id="as48m" class="t_mag"></td>
								</tr>
								<tr id="as49" class="r_sts">
									<td class="t_itm">貫通攻撃</td>
									<td id="as49v" class="t_val"></td>
									<td id="as49p" class="t_pct"></td>
									<td id="as49m" class="t_mag"></td>
								</tr>
								<tr id="as50" class="r_sts">
									<td class="t_itm">拡散攻撃</td>
									<td id="as50v" class="t_val"></td>
									<td id="as50p" class="t_pct"></td>
									<td id="as50m" class="t_mag"></td>
								</tr>
								<tr id="as51" class="r_sts">
									<td class="t_itm">多段攻撃</td>
									<td id="as51v" class="t_val"></td>
									<td id="as51p" class="t_pct"></td>
									<td id="as51m" class="t_mag"></td>
								</tr>
								<tr id="as52" class="r_sts">
									<td class="t_itm">即死攻撃</td>
									<td id="as52v" class="t_val"></td>
									<td id="as52p" class="t_pct"></td>
									<td id="as52m" class="t_mag"></td>
								</tr>
								<tr id="as53" class="r_sts">
									<td class="t_itm">格闘</td>
									<td id="as53v" class="t_val"></td>
									<td id="as53p" class="t_pct"></td>
									<td id="as53m" class="t_mag"></td>
								</tr>
								<tr id="as54" class="r_sts">
									<td class="t_itm">固定ダメージ</td>
									<td id="as54v" class="t_val"></td>
									<td id="as54p" class="t_pct"></td>
									<td id="as54m" class="t_mag"></td>
								</tr>
								<tr id="as55" class="r_sts">
									<td class="t_itm">反射ダメージ</td>
									<td id="as55v" class="t_val"></td>
									<td id="as55p" class="t_pct"></td>
									<td id="as55m" class="t_mag"></td>
								</tr>
							<tr>
								<td colspan="4" class="t_hed">威力</td>
							</tr>
								<tr id="as56" class="r_sts">
									<td class="t_itm">威力：斬</td>
									<td id="as56v" class="t_val"></td>
									<td id="as56p" class="t_pct"></td>
									<td id="as56m" class="t_mag"></td>
								</tr>
								<tr id="as57" class="r_sts">
									<td class="t_itm">威力：壊</td>
									<td id="as57v" class="t_val"></td>
									<td id="as57p" class="t_pct"></td>
									<td id="as57m" class="t_mag"></td>
								</tr>
								<tr id="as58" class="r_sts">
									<td class="t_itm">威力：突</td>
									<td id="as58v" class="t_val"></td>
									<td id="as58p" class="t_pct"></td>
									<td id="as58m" class="t_mag"></td>
								</tr>
								<tr id="as59" class="r_sts">
									<td class="t_itm">威力：火</td>
									<td id="as59v" class="t_val"></td>
									<td id="as59p" class="t_pct"></td>
									<td id="as59m" class="t_mag"></td>
								</tr>
								<tr id="as60" class="r_sts">
									<td class="t_itm">威力：水</td>
									<td id="as60v" class="t_val"></td>
									<td id="as60p" class="t_pct"></td>
									<td id="as60m" class="t_mag"></td>
								</tr>
								<tr id="as61" class="r_sts">
									<td class="t_itm">威力：風</td>
									<td id="as61v" class="t_val"></td>
									<td id="as61p" class="t_pct"></td>
									<td id="as61m" class="t_mag"></td>
								</tr>
								<tr id="as62" class="r_sts">
									<td class="t_itm">威力：地</td>
									<td id="as62v" class="t_val"></td>
									<td id="as62p" class="t_pct"></td>
									<td id="as62m" class="t_mag"></td>
								</tr>
								<tr id="as63" class="r_sts">
									<td class="t_itm">威力：雷</td>
									<td id="as63v" class="t_val"></td>
									<td id="as63p" class="t_pct"></td>
									<td id="as63m" class="t_mag"></td>
								</tr>
								<tr id="as64" class="r_sts">
									<td class="t_itm">威力：ブレス</td>
									<td id="as64v" class="t_val"></td>
									<td id="as64p" class="t_pct"></td>
									<td id="as64m" class="t_mag"></td>
								</tr>
						</tbody>
					</table>
				</div>
				<div class="d_aln">
					<table class="t_sts">
						<tbody>
							<tr>
								<td colspan="4" class="t_hed">耐性</td>
							</tr>
								<tr id="as65" class="r_sts">
									<td class="t_itm">耐性：斬</td>
									<td id="as65v" class="t_val"></td>
									<td id="as65p" class="t_pct"></td>
									<td id="as65m" class="t_mag"></td>
								</tr>
								<tr id="as66" class="r_sts">
									<td class="t_itm">耐性：壊</td>
									<td id="as66v" class="t_val"></td>
									<td id="as66p" class="t_pct"></td>
									<td id="as66m" class="t_mag"></td>
								</tr>
								<tr id="as67" class="r_sts">
									<td class="t_itm">耐性：突</td>
									<td id="as67v" class="t_val"></td>
									<td id="as67p" class="t_pct"></td>
									<td id="as67m" class="t_mag"></td>
								</tr>
								<tr id="as68" class="r_sts">
									<td class="t_itm">耐性：火</td>
									<td id="as68v" class="t_val"></td>
									<td id="as68p" class="t_pct"></td>
									<td id="as68m" class="t_mag"></td>
								</tr>
								<tr id="as69" class="r_sts">
									<td class="t_itm">耐性：水</td>
									<td id="as69v" class="t_val"></td>
									<td id="as69p" class="t_pct"></td>
									<td id="as69m" class="t_mag"></td>
								</tr>
								<tr id="as70" class="r_sts">
									<td class="t_itm">耐性：風</td>
									<td id="as70v" class="t_val"></td>
									<td id="as70p" class="t_pct"></td>
									<td id="as70m" class="t_mag"></td>
								</tr>
								<tr id="as71" class="r_sts">
									<td class="t_itm">耐性：地</td>
									<td id="as71v" class="t_val"></td>
									<td id="as71p" class="t_pct"></td>
									<td id="as71m" class="t_mag"></td>
								</tr>
								<tr id="as72" class="r_sts">
									<td class="t_itm">耐性：雷</td>
									<td id="as72v" class="t_val"></td>
									<td id="as72p" class="t_pct"></td>
									<td id="as72m" class="t_mag"></td>
								</tr>
								<tr id="as73" class="r_sts">
									<td class="t_itm">耐性：貫通</td>
									<td id="as73v" class="t_val"></td>
									<td id="as73p" class="t_pct"></td>
									<td id="as73m" class="t_mag"></td>
								</tr>
								<tr id="as74" class="r_sts">
									<td class="t_itm">耐性：拡散</td>
									<td id="as74v" class="t_val"></td>
									<td id="as74p" class="t_pct"></td>
									<td id="as74m" class="t_mag"></td>
								</tr>
								<tr id="as75" class="r_sts">
									<td class="t_itm">耐性：致命打率</td>
									<td id="as75v" class="t_val"></td>
									<td id="as75p" class="t_pct"></td>
									<td id="as75m" class="t_mag"></td>
								</tr>
								<tr id="as76" class="r_sts">
									<td class="t_itm">耐性：即死</td>
									<td id="as76v" class="t_val"></td>
									<td id="as76p" class="t_pct"></td>
									<td id="as76m" class="t_mag"></td>
								</tr>
							<tr>
								<td colspan="4" class="t_hed">状態異常攻撃</td>
							</tr>
								<tr id="as77" class="r_sts">
									<td class="t_itm">状態異常付与</td>
									<td id="as77v" class="t_val"></td>
									<td id="as77p" class="t_pct"></td>
									<td id="as77m" class="t_mag"></td>
								</tr>
								<tr id="as78" class="r_sts">
									<td class="t_itm">状態異常：毒</td>
									<td id="as78v" class="t_val"></td>
									<td id="as78p" class="t_pct"></td>
									<td id="as78m" class="t_mag"></td>
								</tr>
								<tr id="as79" class="r_sts">
									<td class="t_itm">状態異常：麻痺</td>
									<td id="as79v" class="t_val"></td>
									<td id="as79p" class="t_pct"></td>
									<td id="as79m" class="t_mag"></td>
								</tr>
								<tr id="as80" class="r_sts">
									<td class="t_itm">状態異常：睡眠</td>
									<td id="as80v" class="t_val"></td>
									<td id="as80p" class="t_pct"></td>
									<td id="as80m" class="t_mag"></td>
								</tr>
								<tr id="as81" class="r_sts">
									<td class="t_itm">状態異常：呪い</td>
									<td id="as81v" class="t_val"></td>
									<td id="as81p" class="t_pct"></td>
									<td id="as81m" class="t_mag"></td>
								</tr>
								<tr id="as82" class="r_sts">
									<td class="t_itm">状態異常：混乱</td>
									<td id="as82v" class="t_val"></td>
									<td id="as82p" class="t_pct"></td>
									<td id="as82m" class="t_mag"></td>
								</tr>
								<tr id="as83" class="r_sts">
									<td class="t_itm">状態異常：沈黙</td>
									<td id="as83v" class="t_val"></td>
									<td id="as83p" class="t_pct"></td>
									<td id="as83m" class="t_mag"></td>
								</tr>
								<tr id="as84" class="r_sts">
									<td class="t_itm">状態異常：暗闇</td>
									<td id="as84v" class="t_val"></td>
									<td id="as84p" class="t_pct"></td>
									<td id="as84m" class="t_mag"></td>
								</tr>
								<tr id="as85" class="r_sts">
									<td class="t_itm">状態異常：停止</td>
									<td id="as85v" class="t_val"></td>
									<td id="as85p" class="t_pct"></td>
									<td id="as85m" class="t_mag"></td>
								</tr>
								<tr id="as86" class="r_sts">
									<td class="t_itm">状態異常：屍</td>
									<td id="as86v" class="t_val"></td>
									<td id="as86p" class="t_pct"></td>
									<td id="as86m" class="t_mag"></td>
								</tr>
								<tr id="as87" class="r_sts">
									<td class="t_itm">状態異常：石化</td>
									<td id="as87v" class="t_val"></td>
									<td id="as87p" class="t_pct"></td>
									<td id="as87m" class="t_mag"></td>
								</tr>
								<tr id="as88" class="r_sts">
									<td class="t_itm">状態異常：狂化</td>
									<td id="as88v" class="t_val"></td>
									<td id="as88p" class="t_pct"></td>
									<td id="as88m" class="t_mag"></td>
								</tr>
								<tr id="as89" class="r_sts">
									<td class="t_itm">威力：毒</td>
									<td id="as89v" class="t_val"></td>
									<td id="as89p" class="t_pct"></td>
									<td id="as89m" class="t_mag"></td>
								</tr>
							<tr>
								<td colspan="4" class="t_hed">耐性：状態異常</td>
							</tr>
								<tr id="as90" class="r_sts">
									<td class="t_itm">耐性：毒</td>
									<td id="as90v" class="t_val"></td>
									<td id="as90p" class="t_pct"></td>
									<td id="as90m" class="t_mag"></td>
								</tr>
								<tr id="as91" class="r_sts">
									<td class="t_itm">耐性：麻痺</td>
									<td id="as91v" class="t_val"></td>
									<td id="as91p" class="t_pct"></td>
									<td id="as91m" class="t_mag"></td>
								</tr>
								<tr id="as92" class="r_sts">
									<td class="t_itm">耐性：睡眠</td>
									<td id="as92v" class="t_val"></td>
									<td id="as92p" class="t_pct"></td>
									<td id="as92m" class="t_mag"></td>
								</tr>
								<tr id="as93" class="r_sts">
									<td class="t_itm">耐性：呪い</td>
									<td id="as93v" class="t_val"></td>
									<td id="as93p" class="t_pct"></td>
									<td id="as93m" class="t_mag"></td>
								</tr>
								<tr id="as94" class="r_sts">
									<td class="t_itm">耐性：混乱</td>
									<td id="as94v" class="t_val"></td>
									<td id="as94p" class="t_pct"></td>
									<td id="as94m" class="t_mag"></td>
								</tr>
								<tr id="as95" class="r_sts">
									<td class="t_itm">耐性：沈黙</td>
									<td id="as95v" class="t_val"></td>
									<td id="as95p" class="t_pct"></td>
									<td id="as95m" class="t_mag"></td>
								</tr>
								<tr id="as96" class="r_sts">
									<td class="t_itm">耐性：暗闇</td>
									<td id="as96v" class="t_val"></td>
									<td id="as96p" class="t_pct"></td>
									<td id="as96m" class="t_mag"></td>
								</tr>
								<tr id="as97" class="r_sts">
									<td class="t_itm">耐性：停止</td>
									<td id="as97v" class="t_val"></td>
									<td id="as97p" class="t_pct"></td>
									<td id="as97m" class="t_mag"></td>
								</tr>
								<tr id="as98" class="r_sts">
									<td class="t_itm">耐性：屍</td>
									<td id="as98v" class="t_val"></td>
									<td id="as98p" class="t_pct"></td>
									<td id="as98m" class="t_mag"></td>
								</tr>
								<tr id="as99" class="r_sts">
									<td class="t_itm">耐性：石化</td>
									<td id="as99v" class="t_val"></td>
									<td id="as99p" class="t_pct"></td>
									<td id="as99m" class="t_mag"></td>
								</tr>
								<tr id="as100" class="r_sts">
									<td class="t_itm">耐性：狂化</td>
									<td id="as100v" class="t_val"></td>
									<td id="as100p" class="t_pct"></td>
									<td id="as100m" class="t_mag"></td>
								</tr>
							<tr>
								<td colspan="4" class="t_hed">追加能力値</td>
							</tr>
								<tr id="as101" class="r_sts">
									<td class="t_itm">獲得経験値</td>
									<td id="as101v" class="t_val"></td>
									<td id="as101p" class="t_pct"></td>
									<td id="as101m" class="t_mag"></td>
								</tr>
								<tr id="as102" class="r_sts">
									<td class="t_itm">解錠</td>
									<td id="as102v" class="t_val"></td>
									<td id="as102p" class="t_pct"></td>
									<td id="as102m" class="t_mag"></td>
								</tr>
								<tr id="as103" class="r_sts">
									<td class="t_itm">戦闘後回復</td>
									<td id="as103v" class="t_val"></td>
									<td id="as103p" class="t_pct"></td>
									<td id="as103m" class="t_mag"></td>
								</tr>
								<tr id="as104" class="r_sts">
									<td class="t_itm">戦闘後全体回復</td>
									<td id="as104v" class="t_val"></td>
									<td id="as104p" class="t_pct"></td>
									<td id="as104m" class="t_mag"></td>
								</tr>
								<tr id="as105" class="r_sts">
									<td class="t_itm">最大召喚数</td>
									<td id="as105v" class="t_val"></td>
									<td id="as105p" class="t_pct"></td>
									<td id="as105m" class="t_mag"></td>
								</tr>
								<tr id="as106" class="r_sts">
									<td class="t_itm">敵対</td>
									<td id="as106v" class="t_val"></td>
									<td id="as106p" class="t_pct"></td>
									<td id="as106m" class="t_mag"></td>
								</tr>
								<tr id="as107" class="r_sts">
									<td class="t_itm">吸収</td>
									<td id="as107v" class="t_val"></td>
									<td id="as107p" class="t_pct"></td>
									<td id="as107m" class="t_mag"></td>
								</tr>
								<tr id="as108" class="r_sts">
									<td class="t_itm">昼間命中</td>
									<td id="as108v" class="t_val"></td>
									<td id="as108p" class="t_pct"></td>
									<td id="as108m" class="t_mag"></td>
								</tr>
								<tr id="as109" class="r_sts">
									<td class="t_itm">昼間回避</td>
									<td id="as109v" class="t_val"></td>
									<td id="as109p" class="t_pct"></td>
									<td id="as109m" class="t_mag"></td>
								</tr>
								<tr id="as110" class="r_sts">
									<td class="t_itm">夜間命中</td>
									<td id="as110v" class="t_val"></td>
									<td id="as110p" class="t_pct"></td>
									<td id="as110m" class="t_mag"></td>
								</tr>
								<tr id="as111" class="r_sts">
									<td class="t_itm">夜間回避</td>
									<td id="as111v" class="t_val"></td>
									<td id="as111p" class="t_pct"></td>
									<td id="as111m" class="t_mag"></td>
								</tr>
								<tr id="as112" class="r_sts">
									<td class="t_itm">アイテムDROP率</td>
									<td id="as112v" class="t_val"></td>
									<td id="as112p" class="t_pct"></td>
									<td id="as112m" class="t_mag"></td>
								</tr>
								<tr id="as113" class="r_sts">
									<td class="t_itm">オプション付与率</td>
									<td id="as113v" class="t_val"></td>
									<td id="as113p" class="t_pct"></td>
									<td id="as113m" class="t_mag"></td>
								</tr>
								<tr id="as114" class="r_sts">
									<td class="t_itm">最低命中率</td>
									<td id="as114v" class="t_val"></td>
									<td id="as114p" class="t_pct"></td>
									<td id="as114m" class="t_mag"></td>
								</tr>
								<tr id="as115" class="r_sts">
									<td class="t_itm">回避率：物理</td>
									<td id="as115v" class="t_val"></td>
									<td id="as115p" class="t_pct"></td>
									<td id="as115m" class="t_mag"></td>
								</tr>
								<tr id="as116" class="r_sts">
									<td class="t_itm">回避率：魔法</td>
									<td id="as116v" class="t_val"></td>
									<td id="as116p" class="t_pct"></td>
									<td id="as116m" class="t_mag"></td>
								</tr>
								<tr id="as117" class="r_sts">
									<td class="t_itm">回避率：ブレス</td>
									<td id="as117v" class="t_val"></td>
									<td id="as117p" class="t_pct"></td>
									<td id="as117m" class="t_mag"></td>
								</tr>
								<tr id="as118" class="r_sts">
									<td class="t_itm">ブロック率：物理</td>
									<td id="as118v" class="t_val"></td>
									<td id="as118p" class="t_pct"></td>
									<td id="as118m" class="t_mag"></td>
								</tr>
								<tr id="as119" class="r_sts">
									<td class="t_itm">ブロック率：魔法</td>
									<td id="as119v" class="t_val"></td>
									<td id="as119p" class="t_pct"></td>
									<td id="as119m" class="t_mag"></td>
								</tr>
								<tr id="as120" class="r_sts">
									<td class="t_itm">ブロック率：ブレス</td>
									<td id="as120v" class="t_val"></td>
									<td id="as120p" class="t_pct"></td>
									<td id="as120m" class="t_mag"></td>
								</tr>
								<tr id="as121" class="r_sts">
									<td class="t_itm">潜在性</td>
									<td id="as121v" class="t_val"></td>
									<td id="as121p" class="t_pct"></td>
									<td id="as121m" class="t_mag"></td>
								</tr>
								<tr id="as122" class="r_sts">
									<td class="t_itm">発動率：ダメージ反撃</td>
									<td id="as122v" class="t_val"></td>
									<td id="as122p" class="t_pct"></td>
									<td id="as122m" class="t_mag"></td>
								</tr>
								<tr id="as123" class="r_sts">
									<td class="t_itm">発動率：回避反撃</td>
									<td id="as123v" class="t_val"></td>
									<td id="as123p" class="t_pct"></td>
									<td id="as123m" class="t_mag"></td>
								</tr>
								<tr id="as124" class="r_sts">
									<td class="t_itm">発動率：格闘</td>
									<td id="as124v" class="t_val"></td>
									<td id="as124p" class="t_pct"></td>
									<td id="as124m" class="t_mag"></td>
								</tr>
								<tr id="as125" class="r_sts">
									<td class="t_itm">発動範囲：かばう</td>
									<td id="as125v" class="t_val"></td>
									<td id="as125p" class="t_pct"></td>
									<td id="as125m" class="t_mag"></td>
								</tr>
								<tr id="as126" class="r_sts">
									<td class="t_itm">無効化率：反撃</td>
									<td id="as126v" class="t_val"></td>
									<td id="as126p" class="t_pct"></td>
									<td id="as126m" class="t_mag"></td>
								</tr>

						</tbody>
					</table>
				</div>
			</div>
		</div>
		</div>
		<script type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
		<script type="text/javascript" src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
		<script type="text/javascript" src="an_cs.js"></script>
		<script type="text/javascript" src="asn.js"></script>
		<script type="text/javascript" src="prm.js"></script>
		<script type="text/javascript" src="opt.js"></script>
		<script type="text/javascript" src="aka.js"></script>
		<script type="text/javascript" src="eqp.js"></script>
		<script type="text/javascript" src="rac.js"></script>
		<script type="text/javascript" src="job.js"></script>
		<script type="text/javascript" src="ttl.js"></script>
		<script type="text/javascript" src="fsn.js"></script>
		<script type="text/javascript" src="mst.js"></script>
		<script type="text/javascript" src="skl.js"></script>
	</body>
</html>
