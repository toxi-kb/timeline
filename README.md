# Timeline

[Ссылка на задание](https://github.com/Life1over/test-task/blob/master/frontend.md)

Порядок добавления нового типа события ("Запрос перевода"):
1. Создать модель для события в src/models
2. Добавить компонент для отрисовки события в таблице (аналогичный src/components/event-timeline/news)
3. Добавить компонент для создания события (аналогичный src/components/news-creation-modal)
4. Добавить в src/components/event-timeline/event-timeline.ts:
   * отрисовку нового типа события (компонент для отрисовки п.2)
   * кнопку создания события (компонент для создания п.3)
5. Добавить компонент для отображения подробной информации по событию (аналогичный src/components/news-info-modal), для его показа в компоненте из п.2 сделать кнопку.
