import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Planta {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @Column({ type: 'varchar', length: 255 })
  horario_lun_vie: string;

  @Column({ type: 'varchar', length: 255 })
  horario_sab: string;

  @Column({ type: 'varchar', length: 255 })
  direccion: string;

  @Column({ type: 'varchar', length: 255 })
  telefono: string;

  @Column({ type: 'varchar', length: 255 })
  tarifa_tb1: string;

  @Column({ type: 'varchar', length: 255 })
  tarifa_ta2: string;

  @Column({ type: 'varchar', length: 255 })
  tarifa_ta1: string;

  @Column({ type: 'varchar', length: 255 })
  comuna: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  created_at: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  updated_at: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  deleted_at: string;

  @Column({ type: 'varchar', length: 255 })
  slug: string;
}
