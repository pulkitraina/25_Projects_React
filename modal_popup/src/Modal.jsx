import React from "react";

export default function Modal({togglePop}){
	return (
		<>
			<div className="modal-larger-container">
				<div className="modal-container">
					<div className="modal-header">
						<span className="modal-header-text">HEADER</span>
						<button onClick={togglePop} className="modal-btn header">&times;</button>
					</div>
					<div className="modal-body">MODAL BODY</div>
					<div className="modal-footer">FOOTER</div>
				</div>
			</div>
		</>
	);
}