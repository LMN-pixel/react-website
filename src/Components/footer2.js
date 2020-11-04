import React from 'react';
import styled from 'styled-components';

export default class Footer2 extends React.Component {
    render() {

        return (
            <FooterWrap>
                
<div class="container marketing">
			<hr class="featurette-divider"/>
			<h2>Heading for some content that you have</h2>
			<div class="row">
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div class="panel">
				<div class="col-md-12 visible-xs">
					<p>
						<button data-parent="#accordion" class="btn btn-primary btn-lg btn-block" type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
	  #1 Example One
						</button>
					</p>
				</div>
				<div id="collapse1" class="div-collapse collapse col-md-4">
					<h3>Header 1</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dignissimos unde nemo sed necessitatibus vitae ipsum, maxime quaerat dolorum doloremque quibusdam vel mollitia inventore sequi, quam deleniti quidem sunt? Similique.</p>
				</div>
                </div>
                <div class="panel">
				<div class="col-md-12 visible-xs">
					<p>
						<button data-parent="#accordion" class="btn btn-primary btn-lg btn-block" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
	  #2 Example Two
						</button>
					</p>
				</div>
				<div id="collapse2"  class="div-collapse collapse col-md-4">
					<h3>Header 2</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dignissimos unde nemo sed necessitatibus vitae ipsum, maxime quaerat dolorum doloremque quibusdam vel mollitia inventore sequi, quam deleniti quidem sunt? Similique.</p>
				</div>
                </div>
                <div class="panel">
				<div class="col-md-12 visible-xs">
					<p>
						<button data-parent="#accordion" class="btn btn-primary btn-lg btn-block" type="button" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
	  #3 Example Three!
						</button>
					</p>
				</div>
				<div id="collapse3" class="div-collapse collapse col-md-4">
					<h3>Header 3</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta dignissimos unde nemo sed necessitatibus vitae ipsum, maxime quaerat dolorum doloremque quibusdam vel mollitia inventore sequi, quam deleniti quidem sunt? Similique.</p>
				</div>
                </div>
                </div>
			</div>

            </div>
            </FooterWrap>
        );
    }
}

const FooterWrap = styled.div `
#accordion .panel {
	border:none;
	-webkit-box-shadow:none; 
    box-shadow:none;
}
.div-collapse {
  border-top: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.div-collapse {
  overflow-x: visible;
  -webkit-overflow-scrolling: touch;
  border-top: 1px solid transparent;
  -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,.1);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.1);
}


@media (min-width: 768px) {
 .div-collapse.collapse {
   display: block !important;
   height: auto !important;
   overflow: visible !important;
 }

}
`;