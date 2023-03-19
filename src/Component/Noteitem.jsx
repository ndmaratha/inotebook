import React from "react";

const Noteitem = ({ note }) => {
	return (
		<div>
			<div className="col-md-3">
				<div class="card my-3">
                    <div class="card-body">
					<h5 class="card-title">{note.title}</h5>
					<p class="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem minus omnis eos rem veritatis perferendis ducimus. Rerum corporis ut minus eius, explicabo, quasi iusto totam quo quaerat voluptas qui ea?</p>
				</div>
                </div>
			</div>
		</div>
	);
};

export default Noteitem;
