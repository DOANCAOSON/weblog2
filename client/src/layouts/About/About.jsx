import React from 'react'
import { useNavigate } from 'react-router-dom'
import Binh from '../../assets/images/binh.jpg'
import Son from '../../assets/images/son.jpg'
import Tu from '../../assets/images/tu.jpg'
import Tung from '../../assets/images/tung.jpg'
import Tuy from '../../assets/images/tuy2.jpg'
import Huy from '../../assets/images/huy.jpg'
import styled from 'styled-components'
export const AboutWrapper = styled.div`
	margin: auto;
	width: 500px;
	height: 70vh;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	overflow: hidden;
	border-radius: 10px;
	background-color: white;
	padding-top: 20px;
	position: relative;
	.title {
		text-align: center;
		margin-bottom: 20px;
		text-transform: uppercase;
	}
	.group {
		padding: 20px;
		overflow-y: auto;
		height: 90%;
	}
	.people {
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		display: flex;
		padding: 10px 15px;
		border-radius: 20px;
		margin-bottom: 10px;
		overflow: hidden;
		cursor: pointer;
		&:hover {
			background-color: #f62682;
			transition: all 0.4s linear;
			.name,
			.desc {
				color: white;
			}
		}
		.image {
			width: 100px;
			border-radius: 100rem;
			overflow: hidden;
			margin-right: 10px;
			img {
				width: 100px;
				height: 100px;
				object-fit: cover;
			}
		}
		.info {
			flex: 1;
			.name {
				font-weight: bold;
			}
		}
	}
`
export const FormReward = styled.div`
	background-color: #f62682;
	position: absolute;
	left: 0;
	cursor: pointer;
	padding: 5px 10px;
	border-bottom-right-radius: 15px;
	border-top-right-radius: 15px;
	color: white;
`
export const Body = styled.div`
	width: 100%;
	height: 100vh;
	background-image: linear-gradient(to right bottom, #2cccff, #f62682);
	padding-top: 50px;
`

const Member = [
	{
		id: 1,
		name: 'Nguyễn Thanh Bình',
		title: 'Nhóm phó.',
		image: Binh
	},
	{
		id: 2,
		name: 'Đoàn Cao Sơn',
		title: 'Nhóm trưởng.',
		image: Son
	},
	{
		id: 3,
		name: 'Vi Thanh Tú',
		title: 'Thành viên.',
		image: Tu
	},
	{
		id: 4,
		name: 'Đào Thanh Tùng',
		title: 'Thành viên.',
		image: Tung
	},
	{
		id: 5,
		name: 'Võ Quốc Tuy',
		title: 'Thành viên.',
		image: Tuy
	},
	{
		id: 6,
		name: 'Đặng Quốc Huy',
		title: 'Thành viên.',
		image: Huy
	}
]
const About = () => {
	const navigate = useNavigate()
	return (
		<Body>
			<AboutWrapper>
				<FormReward onClick={() => navigate(-1)}>Back</FormReward>
				<h1 className="title">
					Thành viên nhóm <strong style={{ color: '#2cccff' }}>Ocean</strong>
				</h1>
				<div className="group">
					{Member.map((item, index) => (
						<div className="people" key={index}>
							<div className="image">
								<img src={item.image} alt="" />
							</div>
							<div className="info">
								<div className="name">{item.name}</div>
								<div className="desc">{item.title}</div>
							</div>
						</div>
					))}
				</div>
			</AboutWrapper>
		</Body>
	)
}

export default About
