import {Sequelize} from 'sequelize'

export const db = new Sequelize('resepblog','root','',{
    host:'localhost',
    dialect:'mysql'
})