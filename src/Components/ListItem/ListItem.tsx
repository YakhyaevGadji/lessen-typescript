const ListItem = () => {
    return(
        <li className="todo-item ">
			<label className="todo-item-label">
				<input className="checkbox" type="checkbox" defaultChecked />
				<span className="completed">Заверстать стартовый шаблон</span>
				<button className="btn btn-secondary btn-sm">Удалить</button>
			</label>
		</li>
    );
};

export default ListItem;