"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function ChatWidget({ onClose }) {
	const [visible, setVisible] = useState(true);
	const [messages, setMessages] = useState([
		{
			id: 1,
			text:
				"Hi there! 👋 I'm here to help you with any questions about our courses, admissions, or career support.",
		},
		{
			id: 2,
			text:
				'You can ask me about:\n• Course details and schedules\n• Placement assistance\n• Certification programs\n• Corporate training options',
		},
	]);
	const [input, setInput] = useState('');
	const bodyRef = useRef(null);

	useEffect(() => {
		if (bodyRef.current) {
			bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
		}
	}, [messages]);

	function handleSend() {
		if (!input.trim()) return;
		setMessages((m) => [...m, { id: Date.now(), text: input }]);
		setInput('');
	}

	function handleKeyPress(e) {
		if (e.key === 'Enter') {
			e.preventDefault();
			handleSend();
		}
	}

	if (!visible) return null;

	return (
		<div className="chat-widget">
			<div className="chat-header">
				<div className="chat-title">We're Online</div>
				<button
					className="chat-close"
					aria-label="Close chat"
					onClick={() => {
						setVisible(false);
						if (typeof onClose === 'function') onClose();
					}}
				>
					×
				</button>
			</div>

			<div className="chat-body" ref={bodyRef}>
				{messages.map((msg) => (
					<div key={msg.id} className="chat-message">
						{msg.text.split('\n').map((line, idx) => (
							<div key={idx}>{line}</div>
						))}
					</div>
				))}
			</div>

			<div className="chat-footer">
				<input
					className="chat-input"
					placeholder="Leave a message"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyPress={handleKeyPress}
				/>
				<button className="chat-send" onClick={handleSend}>
					Send
				</button>
			</div>
		</div>
	);
}
